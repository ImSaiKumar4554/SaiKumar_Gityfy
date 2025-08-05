import { examplePrompts } from '../data/mockData';

interface ExamplePromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

export function ExamplePrompts({ onSelectPrompt }: ExamplePromptsProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 text-center mb-4">
        Try asking me about tickets:
      </p>
      <div className="grid gap-2">
        {examplePrompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onSelectPrompt(prompt)}
            className="text-left p-3 bg-white border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-colors text-sm"
          >
            "{prompt}"
          </button>
        ))}
      </div>
    </div>
  );
}