export default function Home() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Bloomthis Vibecode Boilerplate</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Use this as a starter project for AI-assisted development.
      </p>

      <ol className="mt-8 list-decimal space-y-4 pl-5">
        <li>
          Clone this repository and open it in your editor.
          <pre className="mt-2 overflow-x-auto rounded-md border bg-muted p-3 text-sm">
            <code>{`git clone <this-repo-url> my-new-app
cd my-new-app`}</code>
          </pre>
        </li>
        <li>Start building your app using your AI coding assistant inside this codebase.</li>
        <li>
          Remove template git history so your project starts fresh.
          <pre className="mt-2 overflow-x-auto rounded-md border bg-muted p-3 text-sm">
            <code>rm -rf .git</code>
          </pre>
        </li>
        <li>
          Reinitialize git and create your first commit.
          <pre className="mt-2 overflow-x-auto rounded-md border bg-muted p-3 text-sm">
            <code>{`git init
git add .
git commit -m "Initial commit from vibecode template"`}</code>
          </pre>
        </li>
        <li>
          Optional: connect your own remote and push.
          <pre className="mt-2 overflow-x-auto rounded-md border bg-muted p-3 text-sm">
            <code>{`git remote add origin <your-new-repo-url>
git branch -M main
git push -u origin main`}</code>
          </pre>
        </li>
      </ol>
    </main>
  );
}
