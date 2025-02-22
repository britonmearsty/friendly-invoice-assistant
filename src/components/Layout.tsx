
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  File,
  UserPlus,
  DollarSign,
  Calendar,
  User,
  Mail,
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const navigationItems = [
    { path: "/", label: "Dashboard", icon: DollarSign },
    { path: "/invoices", label: "Invoices", icon: File },
    { path: "/clients", label: "Clients", icon: User },
    { path: "/calendar", label: "Calendar", icon: Calendar },
    { path: "/reminders", label: "Reminders", icon: Mail },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 glass-card">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary mb-8">InvoiceFlow</h1>
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setIsHovered(item.path)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 transition-all duration-300 ease-in-out",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10",
                    isHovered === item.path && !isActive && "bg-primary/5"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 px-6">
        <Button
          variant="outline"
          className="w-full justify-start gap-3 border-dashed"
        >
          <UserPlus className="h-5 w-5" />
          Invite Team
        </Button>
      </div>
    </nav>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-secondary/30">
      <Navigation />
      <main className="pl-64 p-6">
        <div className="fade-in">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
