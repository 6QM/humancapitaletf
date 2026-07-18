import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="eyebrow">404</p>
      <h1>This position does not exist.</h1>
      <p>这个仓位不存在，或者已经被重新配置。</p>
      <Link className="button button-dark" href="/zh">返回 Human Capital ETF</Link>
    </div>
  );
}
