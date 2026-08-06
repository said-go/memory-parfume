import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products.js';
import { filterProducts, setSeo, sortProducts } from '../utils.js';
import ActiveFilters from '../components/ActiveFilters.jsx';
import EmptyState from '../components/EmptyState.jsx';
import FilterPanel from '../components/FilterPanel.jsx';
import MobileFilterDrawer from '../components/MobileFilterDrawer.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SortSelect from '../components/SortSelect.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import styles from './Pages.module.css';

const emptyFilters = { q: '', gender: '', family: '', brand: '', season: '', volume: '', note: '', availability: '', maxPrice: '' };

export default function Catalog() {
  const [params, setParams] = useSearchParams();
  const [drawer, setDrawer] = useState(false);
  const [sort, setSort] = useState(params.get('sort') || 'popular');
  const filters = Object.keys(emptyFilters).reduce((acc, key) => ({ ...acc, [key]: params.get(key) || '' }), {});

  useEffect(() => setSeo({
    title: 'Каталог ароматов | Maison Memory',
    description: 'Поиск, фильтры и сортировка премиальной парфюмерии по полу, бренду, нотам, семейству, объему, цене и наличию.'
  }), []);

  const update = (next) => {
    const nextParams = new URLSearchParams();
    Object.entries(next).forEach(([key, value]) => value && nextParams.set(key, value));
    if (sort !== 'popular') nextParams.set('sort', sort);
    setParams(nextParams, { replace: true });
  };

  const remove = (key) => update({ ...filters, [key]: '' });
  const reset = () => {
    setSort('popular');
    setParams({}, { replace: true });
  };

  const visible = useMemo(() => sortProducts(filterProducts(products, filters), sort), [filters, sort]);

  return (
    <section className="section pageTop">
      <Breadcrumbs items={[{ label: 'Каталог' }]} />
      <div className={styles.catalogHead}>
        <div>
          <h1>Каталог ароматов</h1>
          <p>Найдено: {visible.length} из {products.length}</p>
        </div>
        <MobileFilterDrawer open={drawer} setOpen={setDrawer} filters={filters} onChange={update} />
      </div>
      <div className={styles.toolbar}>
        <SearchBar value={filters.q} onChange={(q) => update({ ...filters, q })} />
        <SortSelect value={sort} onChange={(value) => {
          setSort(value);
          const next = new URLSearchParams(params);
          value === 'popular' ? next.delete('sort') : next.set('sort', value);
          setParams(next, { replace: true });
        }} />
      </div>
      <ActiveFilters filters={filters} onRemove={remove} onReset={reset} />
      <div className={styles.catalogLayout}>
        <div className={styles.desktopFilters}><FilterPanel filters={filters} onChange={update} /></div>
        <div>{visible.length ? <ProductGrid products={visible} /> : <EmptyState onReset={reset} />}</div>
      </div>
    </section>
  );
}
