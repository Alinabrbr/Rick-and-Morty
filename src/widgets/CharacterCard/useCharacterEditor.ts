import { useState } from 'react';

import type { Character } from '@/shared/types/type';

export const useCharacterEditor = (character: Character, onSave: (character: Character) => void) => {
    const [draft, setDraft] = useState<Character | null>(null);

    const startEditing = () => setDraft(character);
    const cancelEditing = () => setDraft(null);
    const updateDraft = (fields: Partial<Character>) => setDraft((prev) => prev && { ...prev, ...fields });
    const saveDraft = () => {
        if (draft) onSave(draft);
        setDraft(null);
    };

    return { draft, startEditing, cancelEditing, updateDraft, saveDraft };
};
