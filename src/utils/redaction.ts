import { render, renderMarkRule } from "datocms-structured-text-to-html-string";
import type {
  RenderSettings,
  StructuredTextGraphQlResponseRecord,
} from "datocms-structured-text-to-html-string";
import type { StructuredText } from "datocms-structured-text-utils";

const REDACTED_STRING =
  "It's redacted from the server-side, do you think you're so clever? ";

const REDACTED_STRING_LENGTH = REDACTED_STRING.length;

function replaceWithRedacted(children: string) {
  const length = children.length;
  const numberOfRedactedString = Math.floor(length / REDACTED_STRING_LENGTH);
  const remainder = length % REDACTED_STRING_LENGTH;
  const repeatedString = REDACTED_STRING.repeat(numberOfRedactedString);
  const remainderString =
    remainder <= 0 ? "" : REDACTED_STRING.substring(0, remainder - 1);
  return repeatedString + remainderString;
}

export const structuredTextRenderOptions: RenderSettings<StructuredTextGraphQlResponseRecord> =
  {
    customMarkRules: [
      renderMarkRule(
        "strikethrough",
        ({ adapter: { renderNode }, children, key }) => {
          const childrenLength = children.length;
          console.table({
            length: childrenLength,
            children,
          });
          return renderNode(
            "del",
            { key },
            replaceWithRedacted(children as unknown as string)
          );
        }
      ),
    ],
  };

export function customRender(structuredText: StructuredText) {
  return render(structuredText, structuredTextRenderOptions);
}
