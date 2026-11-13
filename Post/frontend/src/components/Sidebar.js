import NavIcon from "./NavIcon";

const navigationItems = [
  { id: "create", label: "Create Post" },
  { id: "feed", label: "Feed" },
];

export default function Sidebar({ activePage, onPageChange }) {
  return (
    <aside className="flex min-h-screen w-full flex-col border-b border-slate-200 bg-white px-5 py-5 sm:px-7 lg:fixed lg:inset-y-0 lg:w-64 lg:border-r lg:border-b-0 lg:px-6 lg:py-7">
      <a
        className="flex items-center gap-3"
        href="#"
        onClick={(event) => event.preventDefault()}
      >
        <span className="flex size-10 items-center justify-center rounded-xl bg-violet-700 text-lg font-bold text-white">
          P
        </span>
        <span className="text-lg font-semibold tracking-tight text-slate-950">
          Postify
        </span>
      </a>

      <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Menu
      </p>
      <nav aria-label="Main navigation" className="flex gap-2 lg:flex-col">
        {navigationItems.map((item) => (
          <button
            aria-current={activePage === item.id ? "page" : undefined}
            className={`flex flex-1 items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition lg:flex-none ${
              activePage === item.id
                ? "bg-violet-50 text-violet-800"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }`}
            key={item.id}
            onClick={() => onPageChange(item.id)}
            type="button"
          >
            <NavIcon type={item.id} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-8 flex flex-row items-center justify-start rounded-2xl bg-slate-50 p-4 lg:mt-auto">
        <div className="flex size-10 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800">
          U
        </div>
        <div className="flex flex-col justify-start p-2">
          <p className="text-sm font-semibold text-slate-900">Usman</p>
          <p className="text-xs text-slate-500">Welcome back</p>
        </div>
      </div>
    </aside>
  );
}
