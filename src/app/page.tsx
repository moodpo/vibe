import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();
  return (
    <div>
      <Button variant="destructive">Click Me</Button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default Page;
