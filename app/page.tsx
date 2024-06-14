import { PageHeader } from "@/components/page-header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <PageHeader className="max-w-2xl">
        <PageHeader.Title>UI toolkit for Everyone</PageHeader.Title>
        <PageHeader.Description>
          User interface toolkit for your components. Generate themes, Create colors, Check contrast &amp; many more to come. Customizable. Open
          Source.
        </PageHeader.Description>
      </PageHeader>
    </main>
  );
}
