import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbMap: { [key: string]: string } = {
    testimonials: 'Success Stories',
    gallery: 'Gallery',
    schedule: 'Schedule Interview',
  };

  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-12 text-sm">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <div key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-gray-600" />
                {isLast ? (
                  <span className="text-blue-400 font-medium">
                    {breadcrumbMap[name] || name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {breadcrumbMap[name] || name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}