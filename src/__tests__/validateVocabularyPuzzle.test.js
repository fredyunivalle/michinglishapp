const fs = require('fs');
const path = require('path');

function validateFolderNamePattern(folderName) {
  const regex = /^\d{7}-\d{4}$/;
  return regex.test(folderName);
}

describe('Vocabulary Puzzle JSON integrity', () => {
  const categoriesDir = path.join(__dirname, '..', '..', 'public', 'vocabulary');
  const categories = fs
    .readdirSync(categoriesDir)
    .filter(f => fs.lstatSync(path.join(categoriesDir, f)).isDirectory());

  categories.forEach(category => {
    const indexPath = path.join(categoriesDir, category, 'index.json');

    test(`📁 ${category}/index.json must exist`, () => {
      expect(fs.existsSync(indexPath)).toBe(true);
    });

    const indexData = JSON.parse(fs.readFileSync(indexPath));
    const expectedFolders = indexData.folders;

    // ✅ Esta va afuera del loop de folders
    test(`📌 All subfolders in "${category}" must be listed in index.json`, () => {
      const physicalFolders = fs
        .readdirSync(path.join(categoriesDir, category))
        .filter(f => fs.lstatSync(path.join(categoriesDir, category, f)).isDirectory());

      const missingFromIndex = physicalFolders.filter(folder => !expectedFolders.includes(folder));
      expect(missingFromIndex).toEqual([]);
    });

    expectedFolders.forEach(folder => {
      const folderPath = path.join(categoriesDir, category, folder);
      const infoPath = path.join(folderPath, 'info.json');

      test(`📂 Folder "${folder}" must exist`, () => {
        expect(fs.existsSync(folderPath)).toBe(true);
      });

      test(`📑 File "info.json" must exist in "${folder}"`, () => {
        expect(fs.existsSync(infoPath)).toBe(true);
      });

      test(`🔢 Folder name "${folder}" must match pattern ddddddd-dddd`, () => {
        expect(validateFolderNamePattern(folder)).toBe(true);
      });

      const jsonData = JSON.parse(fs.readFileSync(infoPath));

      test(`👤 User info must be defined in "${folder}"`, () => {
        expect(jsonData.user).toBeDefined();
        expect(jsonData.user.username).toBeTruthy();
        expect(jsonData.user.profileImage).toMatch(/^https?:\/\//);
        expect(jsonData.user.socialLink).toMatch(/^@/);
      });

      test(`🧠 Word list must be valid in "${folder}"`, () => {
        expect(Array.isArray(jsonData.words)).toBe(true);
        jsonData.words.forEach(word => {
          expect(word).toHaveProperty('en');
          expect(word).toHaveProperty('es');
          expect(typeof word.en).toBe('string');
          expect(typeof word.es).toBe('string');
          expect(word.en).not.toBe('');
          expect(word.es).not.toBe('');
        });
      });

      test(`🚫 No duplicate words in "${folder}"`, () => {
        const seenEn = new Set();
        const seenEs = new Set();

        jsonData.words.forEach(word => {
          expect(seenEn.has(word.en)).toBe(false);
          expect(seenEs.has(word.es)).toBe(false);
          seenEn.add(word.en);
          seenEs.add(word.es);
        });
      });
      // 👀 Global duplicate detection between folders
test(`🚫 No duplicate words across folders in category "${category}"`, () => {
  const seenEn = new Set();
  const seenEs = new Set();
  const duplicates = [];

  expectedFolders.forEach(folder => {
    const infoPath = path.join(categoriesDir, category, folder, 'info.json');
    if (!fs.existsSync(infoPath)) return;

    const jsonData = JSON.parse(fs.readFileSync(infoPath));

    jsonData.words.forEach(word => {
      const dupEn = seenEn.has(word.en);
      const dupEs = seenEs.has(word.es);
      if (dupEn || dupEs) {
        duplicates.push({ folder, word });
      }
      seenEn.add(word.en);
      seenEs.add(word.es);
    });
  });

  expect(duplicates).toEqual([]);
});

test(`📏 Folder "${folder}" must contain at least 4 words`, () => {
  expect(jsonData.words.length).toBeGreaterThanOrEqual(4);
});
    });
  });
});
