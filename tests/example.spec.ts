import { test, expect } from '@playwright/test';

// --- Positive Functional Tests (24) ---

test('Pos_Fun_0001 - Convert simple greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('api paasal yanavaa.');
  await expect(page.getByText('අපි පාසල් යනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0002 - Complex sentence with conjunction', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.', { delay: 100 });
  await expect(page.getByText('මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0003 - Sentence with necessity', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('vaessa unath api yanna epaeyi.', { delay: 100 });
  await expect(page.getByText('වැස්ස උනත් අපි යන්න එපැයි.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0004 - Interrogative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('oyaa kavadhdha enna hithan inne? ', { delay: 100 });
  await expect(page.getByText('ඔයා කවද්ද එන්න හිතන් ඉන්නේ? ')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0005 - Simple command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('issarahata yanna.', { delay: 100 });
  await expect(page.getByText('ඉස්සරහට යන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0006 - Affirmative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('oyaa eeka hariyata kiyavalaa.', { delay: 100 });
  await expect(page.getByText('ඔයා ඒක හරියට කියවලා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0007 - Negative assertion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mama ehema karannee naehae.', { delay: 100 });
  await expect(page.getByText('මම එහෙම කරන්නේ නැහැ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0008 - Morning greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('suba udhaeesanak!', { delay: 100 });
  await expect(page.getByText('සුබ උදෑසනක්!')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0009 - Help request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mata udhavvak karanna puLuvandha?', { delay: 100 });
  await expect(page.getByText('මට උදව්වක් කරන්න පුළුවන්ද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0010 - Simple response', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('hari, mama karannam.', { delay: 100 });
  await expect(page.getByText('හරි, මම කරන්නම්.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0011 - Polite request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('karuNaakaralaa mata podi udhavvak karanna puLuvandha?', { delay: 100 });
  await expect(page.getByText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0012 - Informal request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('eeyi, ooka dhiyan.', { delay: 100 });
  await expect(page.getByText('ඒයි, ඕක දියන්.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0013 - Refusal sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mata eeka epaa.', { delay: 100 });
  await expect(page.getByText('මට ඒක එපා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0014 - Short work phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('hariyata vaeda.', { delay: 100 });
  await expect(page.getByText('හරියට වැඩ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0015 - Food related phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mata paan kanna oonee.', { delay: 100 });
  await expect(page.getByText('මට පාන් කන්න ඕනේ.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0016 - Continuous typing without spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('matapaankannaoonee', { delay: 100 });
  await expect(page.getByText('මටපාන්කන්නඕනේ')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0017 - English technical term', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('WiFi', { delay: 100 });
  await expect(page.getByText('WiFi')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0018 - Mixed Sinhala and English terms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('api trip eka Kandy valata yamudha.', { delay: 100 });
  await expect(page.getByText('අපි trip එක Kandy වලට යමුද.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0019 - List of acronyms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('ATM, POS, CVV, CVC, IBAN, SWIFT', { delay: 100 });
  await expect(page.getByText('ATM, POS, CVV, CVC, IBAN, SWIFT')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0020 - Greeting with punctuation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('ayubovan!', { delay: 100 });
  await expect(page.getByText('ආයුබෝවන්!')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0021 - Possession phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mata aluth pothak thiyenava.', { delay: 100 });
  await expect(page.getByText('මට අලුත් පොතක් තියෙනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0022 - Directional phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('dhakuNata haravanna.', { delay: 100 });
  await expect(page.getByText('දකුණට හරවන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0023 - Descriptive sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('pala thuru harima rasayi.', { delay: 100 });
  await expect(page.getByText('පල තුරු හරිම රසයි.')).toBeVisible({ timeout: 10000 });
});

test('Pos_Fun_0024 - Daily routine', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mama haema dhaanma vaeda karanavaa.', { delay: 100 });
  await expect(page.getByText('මම හැම දාන්ම වැඩ කරනවා.')).toBeVisible({ timeout: 10000 });
});

// --- UI Performance / Interface Tests (5) ---

test('Pos_UI_0001 - Multiline input rendering', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mama gedhara yanavaa.\noyaa enavadha?', { delay: 100 });
  await expect(page.getByText('මම ගෙදර යනවා.\nඔයා එනවද?')).toBeVisible({ timeout: 10000 });
});

test('Pos_UI_0002 - Numbers and units combination', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('maalu kg 2k ganna.', { delay: 100 });
  await expect(page.getByText('මාලු kg 2ක් ගන්න.')).toBeVisible({ timeout: 10000 });
});

test('Pos_UI_0003 - Long paragraph processing stability', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvardhana adDhikaariya sathu maarga kotas vinashayata pathva aethi athara pravaahana avahira vee aetha.', { delay: 100 });
  await expect(page.getByText('දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්දන අඩ්ධිකාරිය සතු මාර්ග කොටස් විනශයට පත්ව ඇති අතර ප්‍රවාහන අවහිර වේ ඇත.')).toBeVisible({ timeout: 10000 });
});

test('Pos_UI_0004 - Mixed acronym and Sinhala text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('OTP eka SMS eken enavaa.', { delay: 100 });
  await expect(page.getByText('OTP එක SMS එකෙන් එනවා.')).toBeVisible({ timeout: 10000 });
});

test('Pos_UI_0005 - Rendering of polite plea', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('anee karuNaakaralaa eeka dhenna.', { delay: 100 });
  await expect(page.getByText('අනේ කරුණාකරලා ඒක දෙන්න.')).toBeVisible({ timeout: 10000 });
});

// --- Negative Functional Tests (6) ---

test('Neg_Fun_0001 - No spaces in sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mamagedharayanavaoyaaennavada', { delay: 100 });
  // Expectation based on logic that it should translate even without spaces if rules apply
  await expect(page.getByText('මමගෙදරයනවාඔයාඑනවද')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0002 - Repeated characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('lassssanayi', { delay: 100 });
  await expect(page.getByText('ලස්සසසනයි')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0003 - Word with unusual vowel stacking', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('aaaaayubovan', { delay: 100 });
  await expect(page.getByText('ආආආයුබෝවන්')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0004 - Symbols within text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mama @ gedhara', { delay: 100 });
  await expect(page.getByText('මම @ ගෙදර')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0005 - Shorthand/Slang mapping', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('lamayi iskool yanava', { delay: 100 });
  await expect(page.getByText('ලමයි ඉස්කෝල් යනවා')).toBeVisible({ timeout: 10000 });
});

test('Neg_Fun_0006 - Mixed numeric/special case', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('12345!@#$', { delay: 100 });
  await expect(page.getByText('12345!@#$')).toBeVisible({ timeout: 10000 });
});