import Link from 'next/link';
import { PanelsTopLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';
import { Button } from '@/components/ui/button';
import { Menu } from '@/components/admin-panel/menu';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { SidebarToggle } from '@/components/admin-panel/sidebar-toggle';

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-20 h-screen transition-width duration-300 ease-in-out',
        sidebar.isOpen === false ? 'translate-x-[-100%] w-[90px]' : 'translate-x-0 w-72',
      )}
    >
      <SidebarToggle isOpen={sidebar.isOpen} setIsOpen={sidebar.setIsOpen} />
      <div className="relative flex flex-col h-full overflow-y-auto px-3 py-4 shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            'mb-1 transition-transform duration-300 ease-in-out',
            sidebar.isOpen === false ? 'translate-x-1' : 'translate-x-0',
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" passHref>
            <a className="flex items-center gap-2">
              <PanelsTopLeft className="mr-1 h-6 w-6" />
              <h1
                className={cn(
                  'whitespace-nowrap text-lg font-bold transition-transform opacity-100 duration-300 ease-in-out',
                  sidebar.isOpen === false ? 'opacity-0 transform -translate-x-10' : 'opacity-100 transform translate-x-0',
                )}
              >
                Brand
              </h1>
            </a>
          </Link>
        </Button>
        <Menu isOpen={sidebar.isOpen} />
      </div>
    </aside>
  );
}
