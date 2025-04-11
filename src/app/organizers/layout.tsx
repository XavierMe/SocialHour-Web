// src/app/organizers/layout.tsx
import Link from "next/link";
import { ReactNode } from "react";

export default function OrganizerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">SocialHour</h2>
          <nav className="space-y-3">
            <Section title="Home" href="/organizers" />
            <Section title="Post" href="/organizers/post" />
            <Section title="Reports" href="/organizers/reports" />
            <Section title="Finance" href="/organizers/finance" />
            <Section title="Marketing" href="/organizers/marketing" />
            <Section title="Settings" href="/organizers/settings" />
          </nav>
        </div>

        {/* Footer / Help */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <Section title="Support & Help" href="/organizers/support" />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

function Section({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block text-gray-700 hover:text-black font-medium">
      {title}
    </Link>
  );
}
