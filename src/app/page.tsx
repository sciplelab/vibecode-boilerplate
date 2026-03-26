export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Bloomthis Vibecode Boilerplate</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Structured setup guide for starting a fresh AI-assisted project.
        </p>
      </header>

      <section className="mt-8 rounded-lg border p-6">
        <h2 className="text-lg font-medium">Step 1 - Clone Template</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Clone this repository and open it in your editor.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-md border bg-muted p-3 text-sm">
          <code>{`git clone https://github.com/sciplelab/vibecode-boilerplate.git  my-new-app
cd my-new-app`}</code>
        </pre>
      </section>

      <section className="mt-4 rounded-lg border p-6">
        <h2 className="text-lg font-medium">Step 2 - Start Development with AI</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Use your AI coding assistant in this codebase to begin building features.
        </p>
      </section>

      <section className="mt-4 rounded-lg border p-6">
        <h2 className="text-lg font-medium">Step 3 - Remove Template Git History</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Delete the existing git metadata so your repository starts clean.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-md border bg-muted p-3 text-sm">
          <code>rm -rf .git</code>
        </pre>
      </section>

      <section className="mt-4 rounded-lg border p-6">
        <h2 className="text-lg font-medium">Step 4 - Initialize Fresh Repository</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Create a new git history for your project and make the first commit.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-md border bg-muted p-3 text-sm">
          <code>{`git init
git add .
git commit -m "Initial commit from vibecode template"`}</code>
        </pre>
      </section>

      <section className="mt-4 rounded-lg border p-6">
        <h2 className="text-lg font-medium">Step 5 - Connect Remote (Optional)</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Point to your own repository and push the initial commit.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-md border bg-muted p-3 text-sm">
          <code>{`git remote add origin <your-new-repo-url>
git branch -M main
git push -u origin main`}</code>
        </pre>
      </section>
    </main>
  );
}
