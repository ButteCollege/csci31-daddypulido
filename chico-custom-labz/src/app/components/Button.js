export default function Button({ title, href = null }) {
  const classNames =
    'px-6 py-4 bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-300 shadow-md transition-all cursor-pointer border-0 rounded-md'
  return href ? (
    <a href={href} className={classNames}>
      {title}
    </a>
  ) : (
    <button className={classNames}>{title}</button>
  )
}
