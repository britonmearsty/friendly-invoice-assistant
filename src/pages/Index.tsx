
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Users, File } from "lucide-react";

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
}: {
  title: string;
  value: string;
  icon: any;
  trend: string;
}) => (
  <Card className="glass-card">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">
        <TrendingUp className="h-4 w-4 inline-block mr-1 text-success" />
        {trend}
      </p>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your invoicing activity
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          icon={DollarSign}
          trend="+20.1% from last month"
        />
        <StatCard
          title="Pending Invoices"
          value="23"
          icon={File}
          trend="4 due this week"
        />
        <StatCard
          title="Active Clients"
          value="15"
          icon={Users}
          trend="+2 new this month"
        />
        <StatCard
          title="Average Payment Time"
          value="8.2 days"
          icon={TrendingUp}
          trend="Down from 10.1 days"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="glass-card col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Revenue chart will be implemented here
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Activity feed will be implemented here
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
