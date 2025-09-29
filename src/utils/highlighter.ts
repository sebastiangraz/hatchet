import {
  createHighlighter,
  type Highlighter,
  type BundledLanguage,
} from "shiki";
import hatchetTheme from "../styles/hatchetsyntax.json";

class HighlighterService {
  private static instance: HighlighterService;
  private highlighter: Highlighter | null = null;
  private initializationPromise: Promise<Highlighter> | null = null;

  private constructor() {}

  static getInstance(): HighlighterService {
    if (!HighlighterService.instance) {
      HighlighterService.instance = new HighlighterService();
    }
    return HighlighterService.instance;
  }

  async getHighlighter(): Promise<Highlighter> {
    if (this.highlighter) {
      return this.highlighter;
    }

    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    this.initializationPromise = this.initializeHighlighter();
    this.highlighter = await this.initializationPromise;
    return this.highlighter;
  }

  private async initializeHighlighter(): Promise<Highlighter> {
    const highlighter = await createHighlighter({
      themes: [hatchetTheme as any],
      langs: [
        "typescript",
        "javascript",
        "python",
        "bash",
        "json",
        "yaml",
        "sql",
        "html",
        "css",
      ], // Add more as needed
    });
    return highlighter;
  }

  async highlightCode(
    code: string,
    lang: BundledLanguage,
    options?: {
      highlightLines?: number[];
    }
  ): Promise<string> {
    try {
      const highlighter = await this.getHighlighter();

      // Ensure the language is loaded
      const loadedLanguages = highlighter.getLoadedLanguages();
      if (!loadedLanguages.includes(lang)) {
        await highlighter.loadLanguage(lang);
      }

      let result = highlighter.codeToHtml(code, {
        lang,
        theme: hatchetTheme.name,
      });

      // Post-process the HTML to add highlighted-line class to specified lines
      if (options?.highlightLines && options.highlightLines.length > 0) {
        const lines = result.split("\n");
        const processedLines = lines.map((line, index) => {
          const lineNumber = index + 1;
          if (options.highlightLines!.includes(lineNumber)) {
            // Look for <span class="line"> and add highlighted-line class
            if (line.includes('class="line"')) {
              return line.replace(
                'class="line"',
                'class="line highlighted-line"'
              );
            }
            // If no line class found, wrap the line content
            else if (line.trim()) {
              return line.replace(
                /^(\s*)(.+)$/,
                '$1<span class="highlighted-line">$2</span>'
              );
            }
          }
          return line;
        });
        result = processedLines.join("\n");
      }

      return result;
    } catch (error) {
      console.error("Failed to highlight code:", error);
      return `<pre><code>${code}</code></pre>`;
    }
  }

  async highlightInlineCode(
    code: string,
    lang: BundledLanguage
  ): Promise<string> {
    try {
      const highlighter = await this.getHighlighter();

      // Ensure the language is loaded
      const loadedLanguages = highlighter.getLoadedLanguages();
      if (!loadedLanguages.includes(lang)) {
        await highlighter.loadLanguage(lang);
      }

      return highlighter.codeToHtml(code, {
        lang,
        theme: hatchetTheme.name,
      });
    } catch (error) {
      console.error("Failed to highlight inline code:", error);
      return `<code>${code}</code>`;
    }
  }
}

export const highlighterService = HighlighterService.getInstance();
