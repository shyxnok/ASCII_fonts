 // ============================================
    // Figlet.js 核心代码（内嵌版本）
    // ============================================
    const LAYOUT = {
      FULL_WIDTH: 0,
      FITTING: 1,
      SMUSHING: 2,
      CONTROLLED_SMUSHING: 3
    };

    class FigletFont {
      constructor() {
        this.comment = '';
        this.numChars = 0;
        this.options = {};
      }
    }

    const fontList = [
      '1Row', '3-D', '3D Diagonal', '3D-ASCII', '3x5', '4Max', '5 Line Oblique',
      'AMC 3 Line', 'AMC 3 Liv1', 'AMC AAA01', 'AMC Neko', 'AMC Razor', 'AMC Razor2',
      'AMC Slash', 'AMC Slider', 'AMC Thin', 'AMC Tubes', 'AMC Untitled',
      'ANSI Compact', 'ANSI Regular', 'ANSI Shadow',
      'ASCII 12', 'ASCII 9', 'ASCII New Roman',
      'Acrobatic', 'Alligator', 'Alligator2', 'Alpha', 'Alphabet', 'Arrows', 'Avatar',
      'B1FF', 'Babyface Lame', 'Babyface Leet',
      'Banner', 'Banner3-D', 'Banner3', 'Banner4',
      'Barbwire', 'Basic', 'Bear', 'Bell', 'Benjamin',
      'Big ASCII 12', 'Big ASCII 9', 'Big Chief',
      'Big Money-ne', 'Big Money-nw', 'Big Money-se', 'Big Money-sw',
      'Big Mono 12', 'Big Mono 9', 'Big', 'Bigfig',
      'Binary', 'Block', 'Blocks', 'Bloody', 'BlurVision ASCII', 'Bolger',
      'Braced', 'Bright', 'Broadway KB', 'Broadway', 'Bubble', 'Bulbhead',
      'Caligraphy', 'Caligraphy2', 'Calvin S', 'Cards', 'Catwalk',
      'Chiseled', 'Chunky', 'Circle', 'Classy', 'Coder Mini', 'Coinstak',
      'Cola', 'Colossal', 'Computer', 'Contessa', 'Contrast', 'Cosmike', 'Cosmike2',
      'Crawford', 'Crawford2', 'Crazy', 'Cricket', 'Cursive',
      'Cyberlarge', 'Cybermedium', 'Cybersmall', 'Cygnet',
      'DANC4', 'DOS Rebel', 'DWhistled', 'Dancing Font',
      'Decimal', 'Def Leppard', 'Delta Corps Priest 1',
      'DiamFont', 'Diamond', 'Diet Cola', 'Digital', 'Doh', 'Doom',
      'Dot Matrix', 'Double Shorts', 'Double', 'Dr Pepper',
      'Efti Chess', 'Efti Font', 'Efti Italic', 'Efti Piti', 'Efti Robot',
      'Efti Wall', 'Efti Water', 'Electronic', 'Elite',
      'Emboss 2', 'Emboss', 'Epic',
      'Fender', 'Filter', 'Fire Font-k', 'Fire Font-s',
      'Flipped', 'Flower Power', 'Font Font', 'Four Tops', 'Fraktur',
      'Fun Face', 'Fun Faces',
      'Future Smooth', 'Future Thin', 'Future', 'Fuzzy',
      'Georgi16', 'Georgia11', 'Ghost', 'Ghoulish', 'Glenyn', 'Goofy', 'Gothic',
      'Graceful', 'Gradient', 'Graffiti', 'Greek',
      'Heart Left', 'Heart Right', 'Henry 3D', 'Hex', 'Hieroglyphs', 'Hollywood',
      'Horizontal Left', 'Horizontal Right',
      'ICL-1900', 'Impossible', 'Invita',
      'Isometric1', 'Isometric2', 'Isometric3', 'Isometric4',
      'Italic', 'Ivrit',
      'JS Block Letters', 'JS Bracket Letters', 'JS Capital Curves',
      'JS Cursive', 'JS Stick Letters',
      'Jacky', 'Jazmine', 'Jerusalem',
      'Katakana', 'Kban', 'Keyboard', 'Knob', 'Konto Slant', 'Konto',
      'LCD', 'Larry 3D 2', 'Larry 3D', 'Lean', 'Letter', 'Letters',
      'Lil Devil', 'Line Blocks', 'Linux', 'Lockergnome',
      'Madrid', 'Marquee', 'Maxfour', 'Merlin1', 'Merlin2', 'Mike', 'Mini',
      'Mirror', 'Mnemonic', 'Modular', 'Mono 12', 'Mono 9',
      'Morse', 'Morse2', 'Moscow', 'Mshebrew210', 'Muzzle',
      'NScript', 'NT Greek', 'NV Script',
      'Nancyj-Fancy', 'Nancyj-Improved', 'Nancyj-Underlined', 'Nancyj', 'Nipples',
      'O8', 'OS2', 'Octal', 'Ogre', 'Old Banner',
      'Pagga', "Patorjk's Cheese", 'Patorjk-HeX', 'Pawp',
      'Peaks Slant', 'Peaks', 'Pebbles', 'Pepper', 'Poison', 'Puffy', 'Puzzle', 'Pyramid',
      'Rammstein', 'Rebel', 'Rectangles', 'Red Phoenix',
      'Relief', 'Relief2', 'Reverse', 'Roman', 'Rot13', 'Rotated', 'Rounded',
      'Rowan Cap', 'Rozzo', 'RubiFont', 'Runic', 'Runyc',
      'S Blood', 'SL Script', 'Santa Clara', 'Script', 'Serifcap',
      'Shaded Blocky', 'Shadow', 'Shimrod', 'Short',
      'Slant Relief', 'Slant', 'Slide',
      'Small ASCII 12', 'Small ASCII 9', 'Small Block', 'Small Braille',
      'Small Caps', 'Small Isometric1', 'Small Keyboard',
      'Small Mono 12', 'Small Mono 9', 'Small Poison', 'Small Script',
      'Small Shadow', 'Small Slant', 'Small Tengwar', 'Small',
      'Soft', 'Speed', 'Spliff', 'Stacey', 'Stampate', 'Stampatello', 'Standard',
      'Star Strips', 'Star Wars', 'Stellar', 'Stforek', 'Stick Letters',
      'Stop', 'Straight', 'Stronger Than All', 'Sub-Zero', 'Swamp Land', 'Swan', 'Sweet',
      'THIS', 'Tanja', 'Tengwar', 'Term', 'Terrace', 'Test1', 'The Edge',
      'Thick', 'Thin', 'Thorned', 'Three Point', 'Ticks Slant', 'Ticks', 'Tiles',
      'Tinker-Toy', 'Tmplr', 'Tombstone', 'Train', 'Trek', 'Tsalagi', 'Tubular',
      'Twisted', 'Two Point', 'USA Flag', 'Univers', 'Upside Down Text', 'Varsity',
      'Wavescape', 'Wavy', 'Weird', 'Wet Letter', 'Whimsy', 'WideTerm', 'Wow', 'miniwi'
    ];

    const renamedFonts = { 'ANSI-Compact': 'ANSI Compact' };

    function getFontName(name) { return renamedFonts[name] || name; }
    function escapeRegExpChar(char) {
      const specialChars = /[.*+?^${}()|[\]\\]/;
      return specialChars.test(char) ? '\\' + char : char;
    }

    function getSmushingRules(oldLayout = -1, newLayout = null) {
      const rules = {};
      const val = newLayout !== null ? newLayout : oldLayout;
      const codeMappings = [
        [16384, 'vLayout', LAYOUT.SMUSHING], [8192, 'vLayout', LAYOUT.FITTING],
        [4096, 'vRule5', true], [2048, 'vRule4', true], [1024, 'vRule3', true],
        [512, 'vRule2', true], [256, 'vRule1', true], [128, 'hLayout', LAYOUT.SMUSHING],
        [64, 'hLayout', LAYOUT.FITTING], [32, 'hRule6', true], [16, 'hRule5', true],
        [8, 'hRule4', true], [4, 'hRule3', true], [2, 'hRule2', true], [1, 'hRule1', true]
      ];
      let remainingVal = val;
      for (const [code, rule, value] of codeMappings) {
        if (remainingVal >= code) {
          remainingVal -= code;
          if (rules[rule] === undefined) rules[rule] = value;
        } else if (rule !== 'vLayout' && rule !== 'hLayout') rules[rule] = false;
      }
      if (rules.hLayout === undefined) {
        if (oldLayout === 0) rules.hLayout = LAYOUT.FITTING;
        else if (oldLayout === -1) rules.hLayout = LAYOUT.FULL_WIDTH;
        else {
          const hasAny = rules.hRule1 || rules.hRule2 || rules.hRule3 || rules.hRule4 || rules.hRule5 || rules.hRule6;
          rules.hLayout = hasAny ? LAYOUT.CONTROLLED_SMUSHING : LAYOUT.SMUSHING;
        }
      } else if (rules.hLayout === LAYOUT.SMUSHING) {
        const hasAny = rules.hRule1 || rules.hRule2 || rules.hRule3 || rules.hRule4 || rules.hRule5 || rules.hRule6;
        if (hasAny) rules.hLayout = LAYOUT.CONTROLLED_SMUSHING;
      }
      if (rules.vLayout === undefined) {
        const hasAny = rules.vRule1 || rules.vRule2 || rules.vRule3 || rules.vRule4 || rules.vRule5;
        rules.vLayout = hasAny ? LAYOUT.CONTROLLED_SMUSHING : LAYOUT.FULL_WIDTH;
      } else if (rules.vLayout === LAYOUT.SMUSHING) {
        const hasAny = rules.vRule1 || rules.vRule2 || rules.vRule3 || rules.vRule4 || rules.vRule5;
        if (hasAny) rules.vLayout = LAYOUT.CONTROLLED_SMUSHING;
      }
      return rules;
    }

    function hRule1_Smush(ch1, ch2, hardBlank = '') { return (ch1 === ch2 && ch1 !== hardBlank) ? ch1 : false; }
    function hRule2_Smush(ch1, ch2) {
      const rule2Str = '|/\\[]{}()<>';
      if (ch1 === '_' && rule2Str.includes(ch2)) return ch2;
      if (ch2 === '_' && rule2Str.includes(ch1)) return ch1;
      return false;
    }
    function hRule3_Smush(ch1, ch2) {
      const rule3Classes = '| /\\ [] {} () <>';
      const pos1 = rule3Classes.indexOf(ch1), pos2 = rule3Classes.indexOf(ch2);
      if (pos1 !== -1 && pos2 !== -1 && pos1 !== pos2 && Math.abs(pos1 - pos2) !== 1) {
        return rule3Classes.charAt(Math.max(pos1, pos2));
      }
      return false;
    }
    function hRule4_Smush(ch1, ch2) {
      const rule4Str = '[] {} ()';
      const pos1 = rule4Str.indexOf(ch1), pos2 = rule4Str.indexOf(ch2);
      if (pos1 !== -1 && pos2 !== -1 && Math.abs(pos1 - pos2) <= 1) return '|';
      return false;
    }
    function hRule5_Smush(ch1, ch2) {
      const patterns = { '/\\': '|', '\\/': 'Y', '><': 'X' };
      return patterns[ch1 + ch2] || false;
    }
    function hRule6_Smush(ch1, ch2, hardBlank = '') { return (ch1 === hardBlank && ch2 === hardBlank) ? hardBlank : false; }
    function vRule1_Smush(ch1, ch2) { return ch1 === ch2 ? ch1 : false; }
    function vRule2_Smush(ch1, ch2) { return hRule2_Smush(ch1, ch2); }
    function vRule3_Smush(ch1, ch2) { return hRule3_Smush(ch1, ch2); }
    function vRule4_Smush(ch1, ch2) {
      if ((ch1 === '-' && ch2 === '_') || (ch1 === '_' && ch2 === '-')) return '=';
      return false;
    }
    function vRule5_Smush(ch1, ch2) { return ch1 === '|' && ch2 === '|' ? '|' : false; }
    function uni_Smush(ch1, ch2, hardBlank) {
      if (ch2 === ' ' || ch2 === '') return ch1;
      if (ch2 === hardBlank && ch1 !== ' ') return ch1;
      return ch2;
    }

    function canVerticalSmush(txt1, txt2, opts) {
      const { fittingRules } = opts;
      if (fittingRules?.vLayout === LAYOUT.FULL_WIDTH) return 'invalid';
      const len = Math.min(txt1.length, txt2.length);
      if (len === 0) return 'invalid';
      let endSmush = false;
      for (let i = 0; i < len; i++) {
        const ch1 = txt1.charAt(i), ch2 = txt2.charAt(i);
        if (ch1 !== ' ' && ch2 !== ' ') {
          if (fittingRules?.vLayout === LAYOUT.FITTING) return 'invalid';
          if (fittingRules?.vLayout === LAYOUT.SMUSHING) return 'end';
          if (!vRule5_Smush(ch1, ch2)) {
            let validSmush = false;
            validSmush = validSmush || (fittingRules?.vRule1 && vRule1_Smush(ch1, ch2));
            validSmush = validSmush || (fittingRules?.vRule2 && vRule2_Smush(ch1, ch2));
            validSmush = validSmush || (fittingRules?.vRule3 && vRule3_Smush(ch1, ch2));
            validSmush = validSmush || (fittingRules?.vRule4 && vRule4_Smush(ch1, ch2));
            endSmush = true;
            if (!validSmush) return 'invalid';
          }
        }
      }
      return endSmush ? 'end' : 'valid';
    }

    function getVerticalSmushDist(lines1, lines2, opts) {
      const maxDist = lines1.length, len1 = lines1.length;
      let curDist = 1;
      while (curDist <= maxDist) {
        const subLines1 = lines1.slice(Math.max(0, len1 - curDist), len1);
        const subLines2 = lines2.slice(0, Math.min(maxDist, curDist));
        let result = '';
        for (let i = 0; i < subLines2.length; i++) {
          const ret = canVerticalSmush(subLines1[i], subLines2[i], opts);
          if (ret === 'end') result = ret;
          else if (ret === 'invalid') { result = ret; break; }
          else if (result === '') result = 'valid';
        }
        if (result === 'invalid') { curDist--; break; }
        if (result === 'end') break;
        if (result === 'valid') curDist++;
      }
      return Math.min(maxDist, curDist);
    }

    function verticallySmushLines(line1, line2, opts) {
      const len = Math.min(line1.length, line2.length);
      const { fittingRules = {} } = opts;
      let result = '';
      for (let i = 0; i < len; i++) {
        const ch1 = line1.charAt(i), ch2 = line2.charAt(i);
        if (ch1 !== ' ' && ch2 !== ' ') {
          if (fittingRules.vLayout === LAYOUT.FITTING || fittingRules.vLayout === LAYOUT.SMUSHING) {
            result += uni_Smush(ch1, ch2);
          } else {
            let validSmush = false;
            validSmush = validSmush || (fittingRules.vRule5 && vRule5_Smush(ch1, ch2));
            validSmush = validSmush || (fittingRules.vRule1 && vRule1_Smush(ch1, ch2));
            validSmush = validSmush || (fittingRules.vRule2 && vRule2_Smush(ch1, ch2));
            validSmush = validSmush || (fittingRules.vRule3 && vRule3_Smush(ch1, ch2));
            validSmush = validSmush || (fittingRules.vRule4 && vRule4_Smush(ch1, ch2));
            result += validSmush;
          }
        } else result += uni_Smush(ch1, ch2);
      }
      return result;
    }

    function verticalSmush(lines1, lines2, overlap, opts) {
      const len1 = lines1.length, len2 = lines2.length;
      const piece1 = lines1.slice(0, Math.max(0, len1 - overlap));
      const piece2_1 = lines1.slice(Math.max(0, len1 - overlap), len1);
      const piece2_2 = lines2.slice(0, Math.min(overlap, len2));
      const piece2 = [];
      for (let i = 0; i < piece2_1.length; i++) {
        piece2.push(i >= len2 ? piece2_1[i] : verticallySmushLines(piece2_1[i], piece2_2[i], opts));
      }
      const piece3 = lines2.slice(Math.min(overlap, len2), len2);
      return [...piece1, ...piece2, ...piece3];
    }

    function getHorizontalSmushLength(txt1, txt2, opts) {
      const { fittingRules = {} } = opts;
      if (fittingRules.hLayout === LAYOUT.FULL_WIDTH) return 0;
      const len1 = txt1.length, len2 = txt2.length, maxDist = len1;
      let curDist = 1, breakAfter = false;
      if (len1 === 0) return 0;
      distCal: while (curDist <= maxDist) {
        const seg1 = txt1.substring(len1 - curDist, len1);
        const seg2 = txt2.substring(0, Math.min(curDist, len2));
        for (let i = 0; i < Math.min(curDist, len2); i++) {
          const ch1 = seg1.charAt(i), ch2 = seg2.charAt(i);
          if (ch1 !== ' ' && ch2 !== ' ') {
            if (fittingRules.hLayout === LAYOUT.FITTING) { curDist--; break distCal; }
            else if (fittingRules.hLayout === LAYOUT.SMUSHING) {
              if (ch1 === opts.hardBlank || ch2 === opts.hardBlank) curDist--;
              break distCal;
            } else {
              breakAfter = true;
              const validSmush =
                (fittingRules.hRule1 && hRule1_Smush(ch1, ch2, opts.hardBlank)) ||
                (fittingRules.hRule2 && hRule2_Smush(ch1, ch2)) ||
                (fittingRules.hRule3 && hRule3_Smush(ch1, ch2)) ||
                (fittingRules.hRule4 && hRule4_Smush(ch1, ch2)) ||
                (fittingRules.hRule5 && hRule5_Smush(ch1, ch2)) ||
                (fittingRules.hRule6 && hRule6_Smush(ch1, ch2, opts.hardBlank));
              if (!validSmush) { curDist--; break distCal; }
            }
          }
        }
        if (breakAfter) break;
        curDist++;
      }
      return Math.min(maxDist, curDist);
    }

    function horizontalSmush(textBlock1, textBlock2, overlap, opts) {
      const { fittingRules = {}, height, hardBlank } = opts;
      if (typeof height !== 'number') throw new Error('height is not defined.');
      const outputFig = [];
      for (let i = 0; i < height; i++) {
        const txt1 = textBlock1[i], txt2 = textBlock2[i];
        const len1 = txt1.length, len2 = txt2.length;
        const piece1 = txt1.slice(0, Math.max(0, len1 - overlap));
        let piece2 = '';
        const seg1 = txt1.substring(Math.max(0, len1 - overlap), Math.max(0, len1 - overlap) + overlap);
        const seg2 = txt2.substring(0, Math.min(overlap, len2));
        for (let j = 0; j < overlap; j++) {
          const ch1 = j < seg1.length ? seg1.charAt(j) : ' ';
          const ch2 = j < seg2.length ? seg2.charAt(j) : ' ';
          if (ch1 !== ' ' && ch2 !== ' ') {
            if (fittingRules.hLayout === LAYOUT.FITTING || fittingRules.hLayout === LAYOUT.SMUSHING) {
              piece2 += uni_Smush(ch1, ch2, hardBlank);
            } else {
              const nextCh =
                (fittingRules.hRule1 && hRule1_Smush(ch1, ch2, hardBlank)) ||
                (fittingRules.hRule2 && hRule2_Smush(ch1, ch2)) ||
                (fittingRules.hRule3 && hRule3_Smush(ch1, ch2)) ||
                (fittingRules.hRule4 && hRule4_Smush(ch1, ch2)) ||
                (fittingRules.hRule5 && hRule5_Smush(ch1, ch2)) ||
                (fittingRules.hRule6 && hRule6_Smush(ch1, ch2, hardBlank)) ||
                uni_Smush(ch1, ch2, hardBlank);
              piece2 += nextCh;
            }
          } else piece2 += uni_Smush(ch1, ch2, hardBlank);
        }
        const piece3 = overlap >= len2 ? '' : txt2.substring(overlap);
        outputFig[i] = piece1 + piece2 + piece3;
      }
      return outputFig;
    }

    function newFigChar(len) { return new Array(len).fill(''); }
    function figLinesWidth(textLines) { return Math.max(...textLines.map(line => line.length)); }
    function joinFigArray(array, len, opts) {
      return array.reduce((acc, data) => horizontalSmush(acc, data.fig, data.overlap || 0, opts), newFigChar(len));
    }
    function breakWord(figChars, len, opts) {
      for (let i = figChars.length - 1; i > 0; i--) {
        const w = joinFigArray(figChars.slice(0, i), len, opts);
        if (figLinesWidth(w) <= opts.width) return { outputFigText: w, chars: figChars.slice(i) };
      }
      return { outputFigText: newFigChar(len), chars: figChars };
    }

    function generateFigTextLines(txt, figChars, opts) {
      const { height, fittingRules = {}, width, whitespaceBreak } = opts;
      if (typeof height !== 'number') throw new Error('height is not defined.');
      let outputFigText = newFigChar(height);
      const outputFigLines = [];
      const processedTxt = txt;
      let nextFigChars = { chars: [], overlap: 0 };
      let figWords = [];

      for (let charIndex = 0; charIndex < processedTxt.length; charIndex++) {
        const char = processedTxt.charAt(charIndex);
        const isSpace = /\s/.test(char);
        let figChar = figChars[char.charCodeAt(0)];
        
        // 如果字符不存在于字体中，使用默认的问号占位符
        if (!figChar) {
          const defaultChar = figChars[63]; // ASCII 63 是问号 '?'
          if (defaultChar) {
            figChar = defaultChar;
          } else {
            // 如果连问号都没有，创建一个简单的占位符
            figChar = new Array(height).fill('?');
          }
        }
        
        if (figChar) {
          let overlap = 0;
          if (fittingRules.hLayout !== LAYOUT.FULL_WIDTH) {
            overlap = Infinity;
            for (let row = 0; row < height; row++) {
              overlap = Math.min(overlap, getHorizontalSmushLength(outputFigText[row], figChar[row], opts));
            }
            overlap = overlap === Infinity ? 0 : overlap;
          }

          if (width > 0) {
            let textFigLine, maxWidth;
            if (whitespaceBreak) {
              const textFigWord = joinFigArray(nextFigChars.chars.concat([{ fig: figChar, overlap }]), height, opts);
              textFigLine = joinFigArray(figWords.concat([{ fig: textFigWord, overlap: nextFigChars.overlap }]), height, opts);
              maxWidth = figLinesWidth(textFigLine);
            } else {
              textFigLine = horizontalSmush(outputFigText, figChar, overlap, opts);
              maxWidth = figLinesWidth(textFigLine);
            }
            if (maxWidth >= width && charIndex > 0) {
              if (whitespaceBreak) {
                outputFigText = joinFigArray(figWords.slice(0, -1), height, opts);
                if (figWords.length > 1) { outputFigLines.push(outputFigText); outputFigText = newFigChar(height); }
                figWords = [];
              } else { outputFigLines.push(outputFigText); outputFigText = newFigChar(height); }
            }
          }

          if (width > 0 && whitespaceBreak) {
            if (!isSpace || charIndex === processedTxt.length - 1) nextFigChars.chars.push({ fig: figChar, overlap });
            if (isSpace || charIndex === processedTxt.length - 1) {
              let tmpBreak = null;
              let maxWidth = 0;
              let textFigLine = null;
              while (true) {
                textFigLine = joinFigArray(nextFigChars.chars, height, opts);
                maxWidth = figLinesWidth(textFigLine);
                if (maxWidth >= width) {
                  tmpBreak = breakWord(nextFigChars.chars, height, opts);
                  nextFigChars = { chars: tmpBreak.chars };
                  outputFigLines.push(tmpBreak.outputFigText);
                } else break;
              }
              if (maxWidth > 0 && textFigLine) {
                figWords.push({ fig: textFigLine, overlap: tmpBreak ? 1 : nextFigChars.overlap });
              }
              if (isSpace) { figWords.push({ fig: figChar, overlap }); outputFigText = newFigChar(height); }
              if (charIndex === processedTxt.length - 1) outputFigText = joinFigArray(figWords, height, opts);
              nextFigChars = { chars: [], overlap };
              continue;
            }
          }
          outputFigText = horizontalSmush(outputFigText, figChar, overlap, opts);
        }
      }

      if (figLinesWidth(outputFigText) > 0) outputFigLines.push(outputFigText);
      if (!opts.showHardBlanks) {
        outputFigLines.forEach(output => {
          for (let row = 0; row < output.length; row++) {
            output[row] = output[row].replace(new RegExp('\\' + opts.hardBlank, 'g'), ' ');
          }
        });
      }
      if (txt === '' && outputFigLines.length === 0) outputFigLines.push(new Array(height).fill(''));
      return outputFigLines;
    }

    function getHorizontalFittingRules(layout, options) {
      const { fittingRules = {} } = options;
      const ruleMap = {
        'default': { hLayout: fittingRules.hLayout, hRule1: fittingRules.hRule1, hRule2: fittingRules.hRule2, hRule3: fittingRules.hRule3, hRule4: fittingRules.hRule4, hRule5: fittingRules.hRule5, hRule6: fittingRules.hRule6 },
        'full': { hLayout: LAYOUT.FULL_WIDTH, hRule1: false, hRule2: false, hRule3: false, hRule4: false, hRule5: false, hRule6: false },
        'fitted': { hLayout: LAYOUT.FITTING, hRule1: false, hRule2: false, hRule3: false, hRule4: false, hRule5: false, hRule6: false },
        'controlled smushing': { hLayout: LAYOUT.CONTROLLED_SMUSHING, hRule1: true, hRule2: true, hRule3: true, hRule4: true, hRule5: true, hRule6: true },
        'universal smushing': { hLayout: LAYOUT.SMUSHING, hRule1: false, hRule2: false, hRule3: false, hRule4: false, hRule5: false, hRule6: false }
      };
      return ruleMap[layout];
    }

    function getVerticalFittingRules(layout, options) {
      const { fittingRules = {} } = options;
      const ruleMap = {
        'default': { vLayout: fittingRules.vLayout, vRule1: fittingRules.vRule1, vRule2: fittingRules.vRule2, vRule3: fittingRules.vRule3, vRule4: fittingRules.vRule4, vRule5: fittingRules.vRule5 },
        'full': { vLayout: LAYOUT.FULL_WIDTH, vRule1: false, vRule2: false, vRule3: false, vRule4: false, vRule5: false },
        'fitted': { vLayout: LAYOUT.FITTING, vRule1: false, vRule2: false, vRule3: false, vRule4: false, vRule5: false },
        'controlled smushing': { vLayout: LAYOUT.CONTROLLED_SMUSHING, vRule1: true, vRule2: true, vRule3: true, vRule4: true, vRule5: true },
        'universal smushing': { vLayout: LAYOUT.SMUSHING, vRule1: false, vRule2: false, vRule3: false, vRule4: false, vRule5: false }
      };
      return ruleMap[layout];
    }

    function generateText(fontName, options, txt) {
      txt = txt.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      const actualFontName = getFontName(fontName);
      const lines = txt.split('\n');
      let figLines = [];
      for (const line of lines) {
        figLines = figLines.concat(generateFigTextLines(line, figFonts[actualFontName], options));
      }
      if (figLines.length === 0) return '';
      let output = figLines[0];
      for (let i = 1; i < figLines.length; i++) {
        output = smushVerticalFigLines(output, figLines[i], options);
      }
      return output.join('\n');
    }

    function reworkFontOpts(fontMeta, options) {
      const myOpts = typeof structuredClone !== 'undefined' ? structuredClone(fontMeta) : JSON.parse(JSON.stringify(fontMeta));
      myOpts.showHardBlanks = options.showHardBlanks || false;
      myOpts.width = options.width != null ? options.width : 10000;  // 默认使用很大的宽度，避免自动换行
      myOpts.whitespaceBreak = options.whitespaceBreak || false;
      if (options.horizontalLayout) {
        const params = getHorizontalFittingRules(options.horizontalLayout, fontMeta);
        if (params) Object.assign(myOpts.fittingRules, params);
      }
      if (options.verticalLayout) {
        const params = getVerticalFittingRules(options.verticalLayout, fontMeta);
        if (params) Object.assign(myOpts.fittingRules, params);
      }
      myOpts.printDirection = 0;  // 强制使用水平方向
      return myOpts;
    }

    function removeEndChar(line, lineNum, fontHeight) {
      const endChar = escapeRegExpChar(line.trim().slice(-1)) || '@';
      const endCharRegEx = lineNum === fontHeight - 1 ? new RegExp(endChar + endChar + '?\\s*$') : new RegExp(endChar + '\\s*$');
      return line.replace(endCharRegEx, '');
    }

    function padLines(lines, numSpaces) {
      const padding = ' '.repeat(numSpaces);
      return lines.map(line => line + padding);
    }

    function smushVerticalFigLines(output, lines, opts) {
      const len1 = output[0].length, len2 = lines[0].length;
      if (len1 > len2) lines = padLines(lines, len1 - len2);
      else if (len2 > len1) output = padLines(output, len2 - len1);
      const overlap = getVerticalSmushDist(output, lines, opts);
      return verticalSmush(output, lines, overlap, opts);
    }

    const figFonts = {};
    const figDefaults = { font: 'Standard', fontPath: './fonts', fetchFontIfMissing: true };

    const figlet = (() => {
      const api = {};

      api.text = async function(txt, optionsOrFontOrCallback, callback) {
        txt = String(txt);
        let options, next;
        if (typeof optionsOrFontOrCallback === 'function') { next = optionsOrFontOrCallback; options = { font: figDefaults.font }; }
        else if (typeof optionsOrFontOrCallback === 'string') { options = { font: optionsOrFontOrCallback }; next = callback; }
        else if (optionsOrFontOrCallback) { options = optionsOrFontOrCallback; next = callback; }
        else { options = { font: figDefaults.font }; next = callback; }
        const fontName = options.font || figDefaults.font;
        try {
          const fontOpts = await api.loadFont(fontName);
          const generatedTxt = fontOpts ? generateText(fontName, reworkFontOpts(fontOpts, options), txt) : '';
          if (next) next(null, generatedTxt);
          return generatedTxt;
        } catch (err) {
          const error = err instanceof Error ? err : new Error(String(err));
          if (next) { next(error); return ''; }
          throw error;
        }
      };

      api.textSync = function(txt, options) {
        txt = String(txt);
        options = typeof options === 'string' ? { font: options } : options || {};
        const fontName = options.font || figDefaults.font;
        const fontOpts = reworkFontOpts(api.loadFontSync(fontName), options);
        return generateText(fontName, fontOpts, txt);
      };

      api.metadata = async function(fontName, callback) {
        fontName = String(fontName);
        try {
          const fontOpts = await api.loadFont(fontName);
          if (!fontOpts) throw new Error('Error loading font.');
          const actualFontName = getFontName(fontName);
          const font = figFonts[actualFontName] || {};
          const result = [fontOpts, font.comment || ''];
          if (callback) callback(null, fontOpts, font.comment);
          return result;
        } catch (err) {
          const error = err instanceof Error ? err : new Error(String(err));
          if (callback) { callback(error); return null; }
          throw error;
        }
      };

      api.defaults = function(opts) {
        if (opts && typeof opts === 'object') Object.assign(figDefaults, opts);
        return typeof structuredClone !== 'undefined' ? structuredClone(figDefaults) : JSON.parse(JSON.stringify(figDefaults));
      };

      api.parseFont = function(fontName, data, override = true) {
        if (figFonts[fontName] && !override) return figFonts[fontName].options;
        data = data.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        const font = new FigletFont();
        const lines = data.split('\n');
        const headerLine = lines.shift();
        if (!headerLine) throw new Error('Invalid font file: missing header');
        const headerData = headerLine.split(' ');
        const opts = {
          hardBlank: headerData[0].substring(5, 6),
          height: parseInt(headerData[1], 10),
          baseline: parseInt(headerData[2], 10),
          maxLength: parseInt(headerData[3], 10),
          oldLayout: parseInt(headerData[4], 10),
          numCommentLines: parseInt(headerData[5], 10),
          printDirection: headerData[6] ? parseInt(headerData[6], 10) : 0,
          fullLayout: headerData[7] ? parseInt(headerData[7], 10) : null,
          codeTagCount: headerData[8] ? parseInt(headerData[8], 10) : null
        };
        const hardBlank = opts.hardBlank || '';
        const requiredValues = [opts.height, opts.baseline, opts.maxLength, opts.oldLayout, opts.numCommentLines];
        if (hardBlank.length !== 1 || requiredValues.some(val => val == null || isNaN(val))) {
          throw new Error('FIGlet header contains invalid values.');
        }
        opts.fittingRules = getSmushingRules(opts.oldLayout, opts.fullLayout);
        font.options = opts;
        const charNums = [];
        for (let i = 32; i <= 126; i++) charNums.push(i);
        charNums.push(196, 214, 220, 228, 246, 252, 223);
        const expectedLines = opts.numCommentLines + opts.height * charNums.length;
        if (lines.length < expectedLines) {
          throw new Error(`FIGlet file is missing data. Expected: ${expectedLines}, Got: ${lines.length}`);
        }
        font.comment = lines.splice(0, opts.numCommentLines).join('\n');
        font.numChars = 0;
        while (lines.length > 0 && font.numChars < charNums.length) {
          const cNum = charNums[font.numChars];
          font[cNum] = lines.splice(0, opts.height);
          for (let i = 0; i < opts.height; i++) {
            font[cNum][i] = typeof font[cNum][i] === 'undefined' ? '' : removeEndChar(font[cNum][i], i, opts.height);
          }
          font.numChars++;
        }
        while (lines.length > 0) {
          const cNumLine = lines.shift();
          if (!cNumLine || cNumLine.trim() === '') break;
          const cNumStr = cNumLine.split(' ')[0];
          let parsedNum;
          if (/^-?0[xX][0-9a-fA-F]+$/.test(cNumStr)) parsedNum = parseInt(cNumStr, 16);
          else if (/^-?0[0-7]+$/.test(cNumStr)) parsedNum = parseInt(cNumStr, 8);
          else if (/^-?[0-9]+$/.test(cNumStr)) parsedNum = parseInt(cNumStr, 10);
          else throw new Error(`Error parsing data. Invalid data: ${cNumStr}`);
          if (parsedNum === -1 || parsedNum < -2147483648 || parsedNum > 2147483647) {
            const msg = parsedNum === -1 ? 'The char code -1 is not permitted.' : `The char code cannot be ${parsedNum < -2147483648 ? 'less than -2147483648' : 'greater than 2147483647'}.`;
            throw new Error(`Error parsing data. ${msg}`);
          }
          font[parsedNum] = lines.splice(0, opts.height);
          for (let i = 0; i < opts.height; i++) {
            font[parsedNum][i] = typeof font[parsedNum][i] === 'undefined' ? '' : removeEndChar(font[parsedNum][i], i, opts.height);
          }
          font.numChars++;
        }
        figFonts[fontName] = font;
        return opts;
      };

      api.loadedFonts = () => Object.keys(figFonts);
      api.clearLoadedFonts = () => Object.keys(figFonts).forEach(key => delete figFonts[key]);

      api.loadFont = async function(fontName, callback) {
        const actualFontName = getFontName(fontName);
        if (figFonts[actualFontName]) {
          const result = figFonts[actualFontName].options;
          if (callback) callback(null, result);
          return Promise.resolve(result);
        }
        try {
          if (!figDefaults.fetchFontIfMissing) throw new Error(`Font is not loaded: ${actualFontName}`);
          const response = await fetch(`${figDefaults.fontPath}/${actualFontName}.flf`);
          if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
          const text = await response.text();
          const result = api.parseFont(actualFontName, text);
          if (callback) callback(null, result);
          return result;
        } catch (error) {
          const err = error instanceof Error ? error : new Error(String(error));
          if (callback) { callback(err); return null; }
          throw err;
        }
      };

      api.loadFontSync = function(name) {
        const actualFontName = getFontName(name);
        if (figFonts[actualFontName]) return figFonts[actualFontName].options;
        throw new Error('Synchronous font loading is not implemented for the browser.');
      };

      api.preloadFonts = async function(fonts, callback) {
        try {
          for (const name of fonts) {
            const actualFontName = getFontName(name);
            const response = await fetch(`${figDefaults.fontPath}/${actualFontName}.flf`);
            if (!response.ok) throw new Error(`Failed to preload fonts. Error fetching font: ${actualFontName}`);
            const data = await response.text();
            api.parseFont(actualFontName, data);
          }
          if (callback) callback();
        } catch (error) {
          const err = error instanceof Error ? error : new Error(String(error));
          if (callback) { callback(err); return; }
          throw error;
        }
      };

      api.fonts = function(callback) {
        return new Promise(resolve => { resolve(fontList); if (callback) callback(null, fontList); });
      };

      api.fontsSync = () => fontList;
      api.figFonts = figFonts;

      const me = async function(txt, optionsOrFontOrCallback, callback) {
        return api.text(txt, optionsOrFontOrCallback, callback);
      };
      Object.assign(me, api);
      return me;
    })();

    // ============================================
    // 页面交互代码
    // ============================================
    document.addEventListener('DOMContentLoaded', async function() {
      figlet.defaults({ fontPath: 'https://cdn.jsdelivr.net/npm/figlet/fonts' });

      const inputText = document.getElementById('input-text');
      const fontSelect = document.getElementById('font-select');
      const btnCopy = document.getElementById('btn-copy');
      const btnClear = document.getElementById('btn-clear');
      const resultBox = document.getElementById('result-box');
      const stats = document.getElementById('stats');
      const statFont = document.getElementById('stat-font');
      const statChars = document.getElementById('stat-chars');
      const statLines = document.getElementById('stat-lines');

      let currentResult = '';

      // 动态渲染字体选项
      fontList.sort().forEach(fontName => {
        const option = document.createElement('option');
        option.value = fontName;
        option.textContent = fontName;
        if (fontName === 'Standard') {
          option.selected = true;
        }
        fontSelect.appendChild(option);
      });

      // 无感预加载字体 - 在后台静默加载，不影响用户体验
      (async function preloadFonts() {
        const batchSize = 5;
        const totalFonts = fontList.length;
        let loadedCount = 0;

        for (let i = 0; i < totalFonts; i += batchSize) {
          const batch = fontList.slice(i, Math.min(i + batchSize, totalFonts));
          await Promise.all(batch.map(async fontName => {
            try {
              await figlet.loadFont(fontName);
              loadedCount++;
            } catch (err) {
              console.warn(`Failed to preload font: ${fontName}`);
            }
          }));
          // 每批加载后等待一小段时间，避免占用太多网络带宽
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        console.log(`字体预加载完成！共加载 ${loadedCount} 个字体`);
      })();

      // 实时生成 ASCII 艺术字
      async function generateArt() {
        const text = inputText.value.trim();
        const font = fontSelect.value;

        if (!text) {
          resultBox.innerHTML = '<pre>请输入文字开始生成 ASCII 艺术字</pre>';
          resultBox.classList.add('empty');
          stats.style.display = 'none';
          currentResult = '';
          return;
        }

        resultBox.classList.remove('empty');

        try {
          const opts = { font };
          const result = await figlet.text(text, opts);
          currentResult = result;
          resultBox.innerHTML = `<pre>${escapeHtml(result)}</pre>`;
          statFont.textContent = font;
          statChars.textContent = text.length;
          statLines.textContent = result.split('\n').length;
          stats.style.display = 'flex';
        } catch (error) {
          resultBox.innerHTML = `<pre style="color: #ff6b6b;">错误: ${error.message}</pre>`;
          stats.style.display = 'none';
          currentResult = '';
        }
      }

      // 复制到剪贴板
      async function copyResult() {
        if (!currentResult) {
          alert('没有可复制的内容');
          return;
        }

        try {
          await navigator.clipboard.writeText(currentResult);
          btnCopy.textContent = '已复制!';
          setTimeout(() => {
            btnCopy.textContent = '复制';
          }, 2000);
        } catch (err) {
          // 降级方案
          const textArea = document.createElement('textarea');
          textArea.value = currentResult;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          btnCopy.textContent = '已复制!';
          setTimeout(() => {
            btnCopy.textContent = '复制';
          }, 2000);
        }
      }

      function clearResult() {
        inputText.value = '';
        currentResult = '';
        resultBox.innerHTML = '<pre>请输入文字开始生成 ASCII 艺术字</pre>';
        resultBox.classList.add('empty');
        stats.style.display = 'none';
        // 隐藏字体预览区域
        const previewSection = document.getElementById('font-preview-section');
        if (previewSection) {
          previewSection.style.display = 'none';
        }
      }

      function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
      }

      // 测试全部字体
      async function previewAllFonts() {
        const text = inputText.value.trim() || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const previewSection = document.getElementById('font-preview-section');
        
        // 创建预览区域
        if (!previewSection) {
          const section = document.createElement('div');
          section.id = 'font-preview-section';
          section.className = 'font-preview-section';
          section.innerHTML = '<h2 style="color: #fff; margin-bottom: 20px;">字体预览</h2>';
          document.querySelector('.main-content').appendChild(section);
        }
        
        const container = document.getElementById('font-preview-section');
        container.style.display = 'block';
        
        // 清空现有内容
        container.innerHTML = '<h2 style="color: #fff; margin-bottom: 20px;">字体预览</h2>';
        
        // 逐个生成字体预览
        for (let i = 0; i < fontList.length; i++) {
          const fontName = fontList[i];
          try {
            const result = await figlet.text(text, { font: fontName });
            
            // 创建字体预览项
            const item = document.createElement('div');
            item.className = 'font-preview-item';
            item.innerHTML = `
              <div class="font-preview-name">${fontName}</div>
              <div class="font-preview-art">${escapeHtml(result)}</div>
            `;
            container.appendChild(item);
            
          } catch (error) {
            console.warn(`Failed to generate preview for font: ${fontName}`);
          }
        }
        
        // 滚动到预览区域
        container.scrollIntoView({ behavior: 'smooth' });
      }

      // 实时监听输入变化
      inputText.addEventListener('input', generateArt);
      fontSelect.addEventListener('change', generateArt);
      btnCopy.addEventListener('click', copyResult);
      btnClear.addEventListener('click', clearResult);
      document.getElementById('btn-preview-all').addEventListener('click', previewAllFonts);

      // 初始化生成
      generateArt();
    });