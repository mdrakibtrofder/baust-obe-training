import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FileText, Image as ImageIcon, LayoutGrid, List, Search, Download, Eye, X } from "lucide-react";
import { PageHeader, Section } from "@/components/site/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { resources, resourceCategories, type Resource } from "@/lib/resources-data";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — OBE Training" },
      { name: "description", content: "Download and preview training modules, BAETE criteria, SAR templates, and reference diagrams." },
      { property: "og:title", content: "Resources — OBE Training" },
      { property: "og:description", content: "Browse, preview, and download all OBE training and BAETE accreditation resources." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type ViewMode = "list" | "card";

function fileName(path: string) {
  return path.split("/").pop() ?? path;
}

function TypeIcon({ type, className }: { type: Resource["type"]; className?: string }) {
  return type === "image" ? (
    <ImageIcon className={className} />
  ) : (
    <FileText className={className} />
  );
}

function Page() {
  const [view, setView] = useState<ViewMode>("list");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [preview, setPreview] = useState<Resource | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const grouped = useMemo(() => {
    const map = new Map<string, Resource[]>();
    for (const r of filtered) {
      if (!map.has(r.category)) map.set(r.category, []);
      map.get(r.category)!.push(r);
    }
    return map;
  }, [filtered]);

  return (
    <>
      <PageHeader
        eyebrow="Reference Library"
        title="Resources"
        lead="Every training module, BAETE criterion, SAR template, and reference diagram used across this site — searchable, previewable, and downloadable in one place."
      />

      <Section>
        {/* Controls */}
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search resources…"
              className="pl-9"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex flex-wrap gap-1.5">
              {["All", ...resourceCategories].map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    category === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 rounded-md border border-border p-1 shrink-0">
              <button
                onClick={() => setView("list")}
                aria-label="List view"
                className={`p-1.5 rounded ${view === "list" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <List className="h-4 w-4" />
              </button>
              <button
                onClick={() => setView("card")}
                aria-label="Card view"
                className={`p-1.5 rounded ${view === "card" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          {filtered.length} of {resources.length} resource{resources.length === 1 ? "" : "s"}
        </div>

        {filtered.length === 0 && (
          <div className="card-elev p-10 text-center text-muted-foreground">
            No resources match your search.
          </div>
        )}

        {/* Content */}
        <div className="space-y-10">
          {[...grouped.entries()].map(([cat, items]) => (
            <div key={cat}>
              <h2 className="font-display text-xl text-ink mb-4">{cat}</h2>

              {view === "list" ? (
                <div className="card-elev divide-y divide-border overflow-hidden">
                  {items.map((r) => (
                    <div key={r.file} className="flex items-center gap-4 px-4 py-3.5">
                      <span className="grid place-items-center h-10 w-10 rounded-lg bg-surface-2 shrink-0">
                        <TypeIcon type={r.type} className="h-5 w-5 text-primary" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-ink truncate">{r.title}</div>
                        <div className="text-sm text-muted-foreground truncate">{r.description}</div>
                      </div>
                      <Badge variant="outline" className="hidden sm:inline-flex shrink-0 uppercase">
                        {r.type}
                      </Badge>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Button variant="ghost" size="icon" onClick={() => setPreview(r)} aria-label={`Preview ${r.title}`}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" asChild aria-label={`Download ${r.title}`}>
                          <a href={r.file} download={fileName(r.file)}>
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((r) => (
                    <div key={r.file} className="card-elev overflow-hidden flex flex-col">
                      <button
                        onClick={() => setPreview(r)}
                        className="relative aspect-[4/3] bg-surface-2 grid place-items-center overflow-hidden group"
                      >
                        {r.type === "image" ? (
                          <img
                            src={r.file}
                            alt={r.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        ) : (
                          <FileText className="h-10 w-10 text-primary" />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors grid place-items-center">
                          <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </button>
                      <div className="p-3.5 flex flex-col flex-1">
                        <div className="font-medium text-ink text-sm leading-snug line-clamp-2">{r.title}</div>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2 flex-1">
                          {r.description}
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <Button variant="outline" size="sm" className="flex-1" onClick={() => setPreview(r)}>
                            <Eye className="h-3.5 w-3.5" /> Preview
                          </Button>
                          <Button variant="secondary" size="sm" className="flex-1" asChild>
                            <a href={r.file} download={fileName(r.file)}>
                              <Download className="h-3.5 w-3.5" /> Get
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden gap-0">
          {preview && (
            <>
              <DialogHeader className="px-5 py-4 border-b border-border">
                <DialogTitle className="flex items-center gap-2 pr-6">
                  <TypeIcon type={preview.type} className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate">{preview.title}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="bg-surface-2" style={{ height: "70vh" }}>
                {preview.type === "pdf" ? (
                  <iframe
                    src={`${preview.file}#toolbar=1`}
                    title={preview.title}
                    className="h-full w-full"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center p-4">
                    <img src={preview.file} alt={preview.title} className="max-h-full max-w-full object-contain rounded-md" />
                  </div>
                )}
              </div>
              <div className="px-5 py-3.5 border-t border-border flex items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground truncate">{preview.description}</p>
                <Button size="sm" asChild className="shrink-0">
                  <a href={preview.file} download={fileName(preview.file)}>
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
