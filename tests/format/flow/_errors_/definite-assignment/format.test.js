runFormatTest(
  {
    importMeta: import.meta,
    // Without a `.js` filename, Prettier parses Flow as a declaration file
    snippets: [
      "let x!",
      "let x! = 1",
      "let x!: number = 1",
      "class C {x!}",
      "class C {x!: number = 1}",
      "class C {static x!: number}",
      "class C {declare x!: number}",
      "abstract class C {abstract x!: number}",
      "declare let x!: number",
      "for (let x!: number of xs) {}",
    ].map((code) => ({ code, filename: "snippet.js" })),
  },
  ["flow"],
);
