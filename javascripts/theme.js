//Global definitions
const allScripts = document.getElementsByTagName('script'); //Get all script paths
const lastScript = allScripts[allScripts.length-1].src.split('?')[0].replace(/\/[\w\d\.]+\/[\w\d\.]+$/, ''); //Get the root path of the theme
const data = { //Some data
  "redmineOrgWarning": {
    "generic": ["You are now heading to: ", "Redmine.org uses Redmine for own needs, and thus a completely different site from this Redmine powered site, dispite possible similarities/identicalities in design. \nPlease don't get confused where you ended up later."]
  },
  "externalLinkWarning": {
    "generic": ["You are now opening the external link, proceed? -> ", "Trust this domain from now on!"]
  },
  "emojiMap" : {
    "GoogleBlob": {
       "People": {
         '©': '/images/emoji/GoogleBlob/emoji_u00a9.png',
         '®': '/images/emoji/GoogleBlob/emoji_u00ae.png',
         '🃏': '/images/emoji/GoogleBlob/emoji_u1f0cf.png',
         '🀄': '/images/emoji/GoogleBlob/emoji_u1f004.png',
         '🏔': '/images/emoji/GoogleBlob/emoji_u1f3d4.png',
         '🏕': '/images/emoji/GoogleBlob/emoji_u1f3d5.png',
         '🏖': '/images/emoji/GoogleBlob/emoji_u1f3d6.png',
         '🏗': '/images/emoji/GoogleBlob/emoji_u1f3d7.png',
         '🏘': '/images/emoji/GoogleBlob/emoji_u1f3d8.png',
         '🏙': '/images/emoji/GoogleBlob/emoji_u1f3d9.png',
         '🏚': '/images/emoji/GoogleBlob/emoji_u1f3da.png',
         '🏛': '/images/emoji/GoogleBlob/emoji_u1f3db.png',
         '🏜': '/images/emoji/GoogleBlob/emoji_u1f3dc.png',
         '🏝': '/images/emoji/GoogleBlob/emoji_u1f3dd.png',
         '🏞': '/images/emoji/GoogleBlob/emoji_u1f3de.png',
         '🏟': '/images/emoji/GoogleBlob/emoji_u1f3df.png',
         '🏠': '/images/emoji/GoogleBlob/emoji_u1f3e0.png',
         '🏡': '/images/emoji/GoogleBlob/emoji_u1f3e1.png',
         '🏢': '/images/emoji/GoogleBlob/emoji_u1f3e2.png',
         '🏣': '/images/emoji/GoogleBlob/emoji_u1f3e3.png',
         '🏤': '/images/emoji/GoogleBlob/emoji_u1f3e4.png',
         '🏥': '/images/emoji/GoogleBlob/emoji_u1f3e5.png',
         '🏦': '/images/emoji/GoogleBlob/emoji_u1f3e6.png',
         '🏧': '/images/emoji/GoogleBlob/emoji_u1f3e7.png',
         '🏨': '/images/emoji/GoogleBlob/emoji_u1f3e8.png',
         '🏩': '/images/emoji/GoogleBlob/emoji_u1f3e9.png',
         '🏪': '/images/emoji/GoogleBlob/emoji_u1f3ea.png',
         '🏫': '/images/emoji/GoogleBlob/emoji_u1f3eb.png',
         '🏬': '/images/emoji/GoogleBlob/emoji_u1f3ec.png',
         '🏭': '/images/emoji/GoogleBlob/emoji_u1f3ed.png',
         '🏮': '/images/emoji/GoogleBlob/emoji_u1f3ee.png',
         '🏯': '/images/emoji/GoogleBlob/emoji_u1f3ef.png',
         '🏰': '/images/emoji/GoogleBlob/emoji_u1f3f0.png',
         '🏳': '/images/emoji/GoogleBlob/emoji_u1f3f3.png',
         '🏴': '/images/emoji/GoogleBlob/emoji_u1f3f4.png',
         '🏵': '/images/emoji/GoogleBlob/emoji_u1f3f5.png',
         '🏷': '/images/emoji/GoogleBlob/emoji_u1f3f7.png',
         '🏸': '/images/emoji/GoogleBlob/emoji_u1f3f8.png',
         '🏹': '/images/emoji/GoogleBlob/emoji_u1f3f9.png',
         '🏺': '/images/emoji/GoogleBlob/emoji_u1f3fa.png',
         '💠': '/images/emoji/GoogleBlob/emoji_u1f4a0.png',
         '💡': '/images/emoji/GoogleBlob/emoji_u1f4a1.png',
         '💢': '/images/emoji/GoogleBlob/emoji_u1f4a2.png',
         '💣': '/images/emoji/GoogleBlob/emoji_u1f4a3.png',
         '💤': '/images/emoji/GoogleBlob/emoji_u1f4a4.png',
         '💥': '/images/emoji/GoogleBlob/emoji_u1f4a5.png',
         '💦': '/images/emoji/GoogleBlob/emoji_u1f4a6.png',
         '💧': '/images/emoji/GoogleBlob/emoji_u1f4a7.png',
         '💨': '/images/emoji/GoogleBlob/emoji_u1f4a8.png',
         '💩': '/images/emoji/GoogleBlob/emoji_u1f4a9.png',
         '💪': '/images/emoji/GoogleBlob/emoji_u1f4aa.png',
         '💫': '/images/emoji/GoogleBlob/emoji_u1f4ab.png',
         '💬': '/images/emoji/GoogleBlob/emoji_u1f4ac.png',
         '💭': '/images/emoji/GoogleBlob/emoji_u1f4ad.png',
         '💮': '/images/emoji/GoogleBlob/emoji_u1f4ae.png',
         '💯': '/images/emoji/GoogleBlob/emoji_u1f4af.png',
         '💰': '/images/emoji/GoogleBlob/emoji_u1f4b0.png',
         '💱': '/images/emoji/GoogleBlob/emoji_u1f4b1.png',
         '💲': '/images/emoji/GoogleBlob/emoji_u1f4b2.png',
         '💳': '/images/emoji/GoogleBlob/emoji_u1f4b3.png',
         '💴': '/images/emoji/GoogleBlob/emoji_u1f4b4.png',
         '💵': '/images/emoji/GoogleBlob/emoji_u1f4b5.png',
         '💶': '/images/emoji/GoogleBlob/emoji_u1f4b6.png',
         '💷': '/images/emoji/GoogleBlob/emoji_u1f4b7.png',
         '💸': '/images/emoji/GoogleBlob/emoji_u1f4b8.png',
         '💹': '/images/emoji/GoogleBlob/emoji_u1f4b9.png',
         '💺': '/images/emoji/GoogleBlob/emoji_u1f4ba.png',
         '💻': '/images/emoji/GoogleBlob/emoji_u1f4bb.png',
         '💼': '/images/emoji/GoogleBlob/emoji_u1f4bc.png',
         '💽': '/images/emoji/GoogleBlob/emoji_u1f4bd.png',
         '💾': '/images/emoji/GoogleBlob/emoji_u1f4be.png',
         '💿': '/images/emoji/GoogleBlob/emoji_u1f4bf.png',
         '📀': '/images/emoji/GoogleBlob/emoji_u1f4c0.png',
         '📁': '/images/emoji/GoogleBlob/emoji_u1f4c1.png',
         '📂': '/images/emoji/GoogleBlob/emoji_u1f4c2.png',
         '📃': '/images/emoji/GoogleBlob/emoji_u1f4c3.png',
         '📄': '/images/emoji/GoogleBlob/emoji_u1f4c4.png',
         '📅': '/images/emoji/GoogleBlob/emoji_u1f4c5.png',
         '📆': '/images/emoji/GoogleBlob/emoji_u1f4c6.png',
         '📇': '/images/emoji/GoogleBlob/emoji_u1f4c7.png',
         '📈': '/images/emoji/GoogleBlob/emoji_u1f4c8.png',
         '📉': '/images/emoji/GoogleBlob/emoji_u1f4c9.png',
         '📊': '/images/emoji/GoogleBlob/emoji_u1f4ca.png',
         '📋': '/images/emoji/GoogleBlob/emoji_u1f4cb.png',
         '📌': '/images/emoji/GoogleBlob/emoji_u1f4cc.png',
         '📍': '/images/emoji/GoogleBlob/emoji_u1f4cd.png',
         '📎': '/images/emoji/GoogleBlob/emoji_u1f4ce.png',
         '📏': '/images/emoji/GoogleBlob/emoji_u1f4cf.png',
         '📐': '/images/emoji/GoogleBlob/emoji_u1f4d0.png',
         '📑': '/images/emoji/GoogleBlob/emoji_u1f4d1.png',
         '📒': '/images/emoji/GoogleBlob/emoji_u1f4d2.png',
         '📓': '/images/emoji/GoogleBlob/emoji_u1f4d3.png',
         '📔': '/images/emoji/GoogleBlob/emoji_u1f4d4.png',
         '📕': '/images/emoji/GoogleBlob/emoji_u1f4d5.png',
         '📖': '/images/emoji/GoogleBlob/emoji_u1f4d6.png',
         '📗': '/images/emoji/GoogleBlob/emoji_u1f4d7.png',
         '📘': '/images/emoji/GoogleBlob/emoji_u1f4d8.png',
         '📙': '/images/emoji/GoogleBlob/emoji_u1f4d9.png',
         '📚': '/images/emoji/GoogleBlob/emoji_u1f4da.png',
         '📜': '/images/emoji/GoogleBlob/emoji_u1f4dc.png',
         '📝': '/images/emoji/GoogleBlob/emoji_u1f4dd.png',
         '📞': '/images/emoji/GoogleBlob/emoji_u1f4de.png',
         '📟': '/images/emoji/GoogleBlob/emoji_u1f4df.png',
         '📠': '/images/emoji/GoogleBlob/emoji_u1f4e0.png',
         '📡': '/images/emoji/GoogleBlob/emoji_u1f4e1.png',
         '📢': '/images/emoji/GoogleBlob/emoji_u1f4e2.png',
         '📣': '/images/emoji/GoogleBlob/emoji_u1f4e3.png',
         '📤': '/images/emoji/GoogleBlob/emoji_u1f4e4.png',
         '📥': '/images/emoji/GoogleBlob/emoji_u1f4e5.png',
         '📦': '/images/emoji/GoogleBlob/emoji_u1f4e6.png',
         '📧': '/images/emoji/GoogleBlob/emoji_u1f4e7.png',
         '📨': '/images/emoji/GoogleBlob/emoji_u1f4e8.png',
         '📩': '/images/emoji/GoogleBlob/emoji_u1f4e9.png',
         '📪': '/images/emoji/GoogleBlob/emoji_u1f4ea.png',
         '📫': '/images/emoji/GoogleBlob/emoji_u1f4eb.png',
         '📬': '/images/emoji/GoogleBlob/emoji_u1f4ec.png',
         '📭': '/images/emoji/GoogleBlob/emoji_u1f4ed.png',
         '📮': '/images/emoji/GoogleBlob/emoji_u1f4ee.png',
         '📯': '/images/emoji/GoogleBlob/emoji_u1f4ef.png',
         '📰': '/images/emoji/GoogleBlob/emoji_u1f4f0.png',
         '📱': '/images/emoji/GoogleBlob/emoji_u1f4f1.png',
         '📲': '/images/emoji/GoogleBlob/emoji_u1f4f2.png',
         '📳': '/images/emoji/GoogleBlob/emoji_u1f4f3.png',
         '📴': '/images/emoji/GoogleBlob/emoji_u1f4f4.png',
         '📶': '/images/emoji/GoogleBlob/emoji_u1f4f6.png',
         '📷': '/images/emoji/GoogleBlob/emoji_u1f4f7.png',
         '📸': '/images/emoji/GoogleBlob/emoji_u1f4f8.png',
         '📹': '/images/emoji/GoogleBlob/emoji_u1f4f9.png',
         '📺': '/images/emoji/GoogleBlob/emoji_u1f4fa.png',
         '📻': '/images/emoji/GoogleBlob/emoji_u1f4fb.png',
         '📼': '/images/emoji/GoogleBlob/emoji_u1f4fc.png',
         '📽': '/images/emoji/GoogleBlob/emoji_u1f4fd.png',
         '📿': '/images/emoji/GoogleBlob/emoji_u1f4ff.png',
         '🖤': '/images/emoji/GoogleBlob/emoji_u1f5a4.png',
         '🖥': '/images/emoji/GoogleBlob/emoji_u1f5a5.png',
         '🖨': '/images/emoji/GoogleBlob/emoji_u1f5a8.png',
         '🖱': '/images/emoji/GoogleBlob/emoji_u1f5b1.png',
         '🖲': '/images/emoji/GoogleBlob/emoji_u1f5b2.png',
         '🖼': '/images/emoji/GoogleBlob/emoji_u1f5bc.png',
         '🗂': '/images/emoji/GoogleBlob/emoji_u1f5c2.png',
         '🗃': '/images/emoji/GoogleBlob/emoji_u1f5c3.png',
         '🗄': '/images/emoji/GoogleBlob/emoji_u1f5c4.png',
         '🗑': '/images/emoji/GoogleBlob/emoji_u1f5d1.png',
         '🗒': '/images/emoji/GoogleBlob/emoji_u1f5d2.png',
         '🗓': '/images/emoji/GoogleBlob/emoji_u1f5d3.png',
         '🗜': '/images/emoji/GoogleBlob/emoji_u1f5dc.png',
         '🗝': '/images/emoji/GoogleBlob/emoji_u1f5dd.png',
         '🗞': '/images/emoji/GoogleBlob/emoji_u1f5de.png',
         '🗡': '/images/emoji/GoogleBlob/emoji_u1f5e1.png',
         '🗣': '/images/emoji/GoogleBlob/emoji_u1f5e3.png',
         '🗨': '/images/emoji/GoogleBlob/emoji_u1f5e8.png',
         '🗯': '/images/emoji/GoogleBlob/emoji_u1f5ef.png',
         '🗳': '/images/emoji/GoogleBlob/emoji_u1f5f3.png',
         '🗺': '/images/emoji/GoogleBlob/emoji_u1f5fa.png',
         '🗻': '/images/emoji/GoogleBlob/emoji_u1f5fb.png',
         '🗼': '/images/emoji/GoogleBlob/emoji_u1f5fc.png',
         '🗽': '/images/emoji/GoogleBlob/emoji_u1f5fd.png',
         '🗾': '/images/emoji/GoogleBlob/emoji_u1f5fe.png',
         '🗿': '/images/emoji/GoogleBlob/emoji_u1f5ff.png',
         '🚠': '/images/emoji/GoogleBlob/emoji_u1f6a0.png',
         '🚡': '/images/emoji/GoogleBlob/emoji_u1f6a1.png',
         '🚢': '/images/emoji/GoogleBlob/emoji_u1f6a2.png',
         '🚣': '/images/emoji/GoogleBlob/emoji_u1f6a3.png',
         '🚤': '/images/emoji/GoogleBlob/emoji_u1f6a4.png',
         '🚥': '/images/emoji/GoogleBlob/emoji_u1f6a5.png',
         '🚦': '/images/emoji/GoogleBlob/emoji_u1f6a6.png',
         '🚧': '/images/emoji/GoogleBlob/emoji_u1f6a7.png',
         '🚨': '/images/emoji/GoogleBlob/emoji_u1f6a8.png',
         '🚩': '/images/emoji/GoogleBlob/emoji_u1f6a9.png',
         '🚪': '/images/emoji/GoogleBlob/emoji_u1f6aa.png',
         '🚬': '/images/emoji/GoogleBlob/emoji_u1f6ac.png',
         '🚲': '/images/emoji/GoogleBlob/emoji_u1f6b2.png',
         '🚴': '/images/emoji/GoogleBlob/emoji_u1f6b4.png',
         '🚵': '/images/emoji/GoogleBlob/emoji_u1f6b5.png',
         '🚶': '/images/emoji/GoogleBlob/emoji_u1f6b6.png',
         '🚽': '/images/emoji/GoogleBlob/emoji_u1f6bd.png',
         '🚿': '/images/emoji/GoogleBlob/emoji_u1f6bf.png',
         '🛀': '/images/emoji/GoogleBlob/emoji_u1f6c0.png',
         '🛁': '/images/emoji/GoogleBlob/emoji_u1f6c1.png',
         '🛋': '/images/emoji/GoogleBlob/emoji_u1f6cb.png',
         '🛌': '/images/emoji/GoogleBlob/emoji_u1f6cc.png',
         '🛍': '/images/emoji/GoogleBlob/emoji_u1f6cd.png',
         '🛎': '/images/emoji/GoogleBlob/emoji_u1f6ce.png',
         '🛏': '/images/emoji/GoogleBlob/emoji_u1f6cf.png',
         '🛐': '/images/emoji/GoogleBlob/emoji_u1f6d0.png',
         '🛒': '/images/emoji/GoogleBlob/emoji_u1f6d2.png',
         '🛠': '/images/emoji/GoogleBlob/emoji_u1f6e0.png',
         '🛡': '/images/emoji/GoogleBlob/emoji_u1f6e1.png',
         '🛢': '/images/emoji/GoogleBlob/emoji_u1f6e2.png',
         '🛣': '/images/emoji/GoogleBlob/emoji_u1f6e3.png',
         '🛤': '/images/emoji/GoogleBlob/emoji_u1f6e4.png',
         '🛥': '/images/emoji/GoogleBlob/emoji_u1f6e5.png',
         '🛩': '/images/emoji/GoogleBlob/emoji_u1f6e9.png',
         '🛫': '/images/emoji/GoogleBlob/emoji_u1f6eb.png',
         '🛬': '/images/emoji/GoogleBlob/emoji_u1f6ec.png',
         '🛰': '/images/emoji/GoogleBlob/emoji_u1f6f0.png',
         '🛳': '/images/emoji/GoogleBlob/emoji_u1f6f3.png',
         '🛴': '/images/emoji/GoogleBlob/emoji_u1f6f4.png',
         '🛵': '/images/emoji/GoogleBlob/emoji_u1f6f5.png',
         '🛶': '/images/emoji/GoogleBlob/emoji_u1f6f6.png',
         '🛷': '/images/emoji/GoogleBlob/emoji_u1f6f7.png',
         '🛸': '/images/emoji/GoogleBlob/emoji_u1f6f8.png',
         '🛹': '/images/emoji/GoogleBlob/emoji_u1f6f9.png',
         '🦠': '/images/emoji/GoogleBlob/emoji_u1f9a0.png',
         '🦡': '/images/emoji/GoogleBlob/emoji_u1f9a1.png',
         '🦢': '/images/emoji/GoogleBlob/emoji_u1f9a2.png',
         '🦰': '/images/emoji/GoogleBlob/emoji_u1f9b0.png',
         '🦱': '/images/emoji/GoogleBlob/emoji_u1f9b1.png',
         '🦲': '/images/emoji/GoogleBlob/emoji_u1f9b2.png',
         '🦳': '/images/emoji/GoogleBlob/emoji_u1f9b3.png',
         '🦴': '/images/emoji/GoogleBlob/emoji_u1f9b4.png',
         '🦵': '/images/emoji/GoogleBlob/emoji_u1f9b5.png',
         '🦶': '/images/emoji/GoogleBlob/emoji_u1f9b6.png',
         '🦷': '/images/emoji/GoogleBlob/emoji_u1f9b7.png',
         '🦸': '/images/emoji/GoogleBlob/emoji_u1f9b8.png',
         '🦹': '/images/emoji/GoogleBlob/emoji_u1f9b9.png',
         '🧀': '/images/emoji/GoogleBlob/emoji_u1f9c0.png',
         '🧁': '/images/emoji/GoogleBlob/emoji_u1f9c1.png',
         '🧂': '/images/emoji/GoogleBlob/emoji_u1f9c2.png',
         '🧐': '/images/emoji/GoogleBlob/emoji_u1f9d0.png',
         '🧑': '/images/emoji/GoogleBlob/emoji_u1f9d1.png',
         '🧒': '/images/emoji/GoogleBlob/emoji_u1f9d2.png',
         '🧓': '/images/emoji/GoogleBlob/emoji_u1f9d3.png',
         '🧔': '/images/emoji/GoogleBlob/emoji_u1f9d4.png',
         '🧕': '/images/emoji/GoogleBlob/emoji_u1f9d5.png',
         '🧟': '/images/emoji/GoogleBlob/emoji_u1f9df.png',
         '🧠': '/images/emoji/GoogleBlob/emoji_u1f9e0.png',
         '🧡': '/images/emoji/GoogleBlob/emoji_u1f9e1.png',
         '🧢': '/images/emoji/GoogleBlob/emoji_u1f9e2.png',
         '🧣': '/images/emoji/GoogleBlob/emoji_u1f9e3.png',
         '🧤': '/images/emoji/GoogleBlob/emoji_u1f9e4.png',
         '🧥': '/images/emoji/GoogleBlob/emoji_u1f9e5.png',
         '🧦': '/images/emoji/GoogleBlob/emoji_u1f9e6.png',
         '🧧': '/images/emoji/GoogleBlob/emoji_u1f9e7.png',
         '🧨': '/images/emoji/GoogleBlob/emoji_u1f9e8.png',
         '🧩': '/images/emoji/GoogleBlob/emoji_u1f9e9.png',
         '🧪': '/images/emoji/GoogleBlob/emoji_u1f9ea.png',
         '🧫': '/images/emoji/GoogleBlob/emoji_u1f9eb.png',
         '🧬': '/images/emoji/GoogleBlob/emoji_u1f9ec.png',
         '🧭': '/images/emoji/GoogleBlob/emoji_u1f9ed.png',
         '🧮': '/images/emoji/GoogleBlob/emoji_u1f9ee.png',
         '🧯': '/images/emoji/GoogleBlob/emoji_u1f9ef.png',
         '🧰': '/images/emoji/GoogleBlob/emoji_u1f9f0.png',
         '🧱': '/images/emoji/GoogleBlob/emoji_u1f9f1.png',
         '🧲': '/images/emoji/GoogleBlob/emoji_u1f9f2.png',
         '🧳': '/images/emoji/GoogleBlob/emoji_u1f9f3.png',
         '🧴': '/images/emoji/GoogleBlob/emoji_u1f9f4.png',
         '🧵': '/images/emoji/GoogleBlob/emoji_u1f9f5.png',
         '🧶': '/images/emoji/GoogleBlob/emoji_u1f9f6.png',
         '🧷': '/images/emoji/GoogleBlob/emoji_u1f9f7.png',
         '🧸': '/images/emoji/GoogleBlob/emoji_u1f9f8.png',
         '🧹': '/images/emoji/GoogleBlob/emoji_u1f9f9.png',
         '🧺': '/images/emoji/GoogleBlob/emoji_u1f9fa.png',
         '🧻': '/images/emoji/GoogleBlob/emoji_u1f9fb.png',
         '🧼': '/images/emoji/GoogleBlob/emoji_u1f9fc.png',
         '🧽': '/images/emoji/GoogleBlob/emoji_u1f9fd.png',
         '🧾': '/images/emoji/GoogleBlob/emoji_u1f9fe.png',
         '🧿': '/images/emoji/GoogleBlob/emoji_u1f9ff.png',
         '🅾': '/images/emoji/GoogleBlob/emoji_u1f17e.png',
         '🅿': '/images/emoji/GoogleBlob/emoji_u1f17f.png',
         '🆎': '/images/emoji/GoogleBlob/emoji_u1f18e.png',
         '🆚': '/images/emoji/GoogleBlob/emoji_u1f19a.png',
         '🈚': '/images/emoji/GoogleBlob/emoji_u1f21a.png',
         '🈯': '/images/emoji/GoogleBlob/emoji_u1f22f.png',
         '🈺': '/images/emoji/GoogleBlob/emoji_u1f23a.png',
         '🌊': '/images/emoji/GoogleBlob/emoji_u1f30a.png',
         '🌋': '/images/emoji/GoogleBlob/emoji_u1f30b.png',
         '🌌': '/images/emoji/GoogleBlob/emoji_u1f30c.png',
         '🌍': '/images/emoji/GoogleBlob/emoji_u1f30d.png',
         '🌎': '/images/emoji/GoogleBlob/emoji_u1f30e.png',
         '🌏': '/images/emoji/GoogleBlob/emoji_u1f30f.png',
         '🌚': '/images/emoji/GoogleBlob/emoji_u1f31a.png',
         '🌛': '/images/emoji/GoogleBlob/emoji_u1f31b.png',
         '🌜': '/images/emoji/GoogleBlob/emoji_u1f31c.png',
         '🌝': '/images/emoji/GoogleBlob/emoji_u1f31d.png',
         '🌞': '/images/emoji/GoogleBlob/emoji_u1f31e.png',
         '🌟': '/images/emoji/GoogleBlob/emoji_u1f31f.png',
         '🌪': '/images/emoji/GoogleBlob/emoji_u1f32a.png',
         '🌫': '/images/emoji/GoogleBlob/emoji_u1f32b.png',
         '🌬': '/images/emoji/GoogleBlob/emoji_u1f32c.png',
         '🌭': '/images/emoji/GoogleBlob/emoji_u1f32d.png',
         '🌮': '/images/emoji/GoogleBlob/emoji_u1f32e.png',
         '🌯': '/images/emoji/GoogleBlob/emoji_u1f32f.png',
         '🌺': '/images/emoji/GoogleBlob/emoji_u1f33a.png',
         '🌻': '/images/emoji/GoogleBlob/emoji_u1f33b.png',
         '🌼': '/images/emoji/GoogleBlob/emoji_u1f33c.png',
         '🌽': '/images/emoji/GoogleBlob/emoji_u1f33d.png',
         '🌾': '/images/emoji/GoogleBlob/emoji_u1f33e.png',
         '🌿': '/images/emoji/GoogleBlob/emoji_u1f33f.png',
         '🍊': '/images/emoji/GoogleBlob/emoji_u1f34a.png',
         '🍋': '/images/emoji/GoogleBlob/emoji_u1f34b.png',
         '🍌': '/images/emoji/GoogleBlob/emoji_u1f34c.png',
         '🍍': '/images/emoji/GoogleBlob/emoji_u1f34d.png',
         '🍎': '/images/emoji/GoogleBlob/emoji_u1f34e.png',
         '🍏': '/images/emoji/GoogleBlob/emoji_u1f34f.png',
         '🍚': '/images/emoji/GoogleBlob/emoji_u1f35a.png',
         '🍛': '/images/emoji/GoogleBlob/emoji_u1f35b.png',
         '🍜': '/images/emoji/GoogleBlob/emoji_u1f35c.png',
         '🍝': '/images/emoji/GoogleBlob/emoji_u1f35d.png',
         '🍞': '/images/emoji/GoogleBlob/emoji_u1f35e.png',
         '🍟': '/images/emoji/GoogleBlob/emoji_u1f35f.png',
         '🍪': '/images/emoji/GoogleBlob/emoji_u1f36a.png',
         '🍫': '/images/emoji/GoogleBlob/emoji_u1f36b.png',
         '🍬': '/images/emoji/GoogleBlob/emoji_u1f36c.png',
         '🍭': '/images/emoji/GoogleBlob/emoji_u1f36d.png',
         '🍮': '/images/emoji/GoogleBlob/emoji_u1f36e.png',
         '🍯': '/images/emoji/GoogleBlob/emoji_u1f36f.png',
         '🍺': '/images/emoji/GoogleBlob/emoji_u1f37a.png',
         '🍻': '/images/emoji/GoogleBlob/emoji_u1f37b.png',
         '🍼': '/images/emoji/GoogleBlob/emoji_u1f37c.png',
         '🍽': '/images/emoji/GoogleBlob/emoji_u1f37d.png',
         '🍾': '/images/emoji/GoogleBlob/emoji_u1f37e.png',
         '🍿': '/images/emoji/GoogleBlob/emoji_u1f37f.png',
         '🎊': '/images/emoji/GoogleBlob/emoji_u1f38a.png',
         '🎋': '/images/emoji/GoogleBlob/emoji_u1f38b.png',
         '🎌': '/images/emoji/GoogleBlob/emoji_u1f38c.png',
         '🎍': '/images/emoji/GoogleBlob/emoji_u1f38d.png',
         '🎎': '/images/emoji/GoogleBlob/emoji_u1f38e.png',
         '🎏': '/images/emoji/GoogleBlob/emoji_u1f38f.png',
         '🎚': '/images/emoji/GoogleBlob/emoji_u1f39a.png',
         '🎛': '/images/emoji/GoogleBlob/emoji_u1f39b.png',
         '🎞': '/images/emoji/GoogleBlob/emoji_u1f39e.png',
         '🎟': '/images/emoji/GoogleBlob/emoji_u1f39f.png',
         '🐽': '/images/emoji/GoogleBlob/emoji_u1f43d.png',
         '🐾': '/images/emoji/GoogleBlob/emoji_u1f43e.png',
         '🐿': '/images/emoji/GoogleBlob/emoji_u1f43f.png',
         '👊': '/images/emoji/GoogleBlob/emoji_u1f44a.png',
         '👋': '/images/emoji/GoogleBlob/emoji_u1f44b.png',
         '👌': '/images/emoji/GoogleBlob/emoji_u1f44c.png',
         '👍': '/images/emoji/GoogleBlob/emoji_u1f44d.png',
         '👎': '/images/emoji/GoogleBlob/emoji_u1f44e.png',
         '👏': '/images/emoji/GoogleBlob/emoji_u1f44f.png',
         '👚': '/images/emoji/GoogleBlob/emoji_u1f45a.png',
         '👛': '/images/emoji/GoogleBlob/emoji_u1f45b.png',
         '👜': '/images/emoji/GoogleBlob/emoji_u1f45c.png',
         '👝': '/images/emoji/GoogleBlob/emoji_u1f45d.png',
         '👞': '/images/emoji/GoogleBlob/emoji_u1f45e.png',
         '👟': '/images/emoji/GoogleBlob/emoji_u1f45f.png',
         '👪': '/images/emoji/GoogleBlob/emoji_u1f46a.png',
         '👫': '/images/emoji/GoogleBlob/emoji_u1f46b.png',
         '👬': '/images/emoji/GoogleBlob/emoji_u1f46c.png',
         '👭': '/images/emoji/GoogleBlob/emoji_u1f46d.png',
         '👮': '/images/emoji/GoogleBlob/emoji_u1f46e.png',
         '👯': '/images/emoji/GoogleBlob/emoji_u1f46f.png',
         '👺': '/images/emoji/GoogleBlob/emoji_u1f47a.png',
         '👻': '/images/emoji/GoogleBlob/emoji_u1f47b.png',
         '👼': '/images/emoji/GoogleBlob/emoji_u1f47c.png',
         '👽': '/images/emoji/GoogleBlob/emoji_u1f47d.png',
         '👾': '/images/emoji/GoogleBlob/emoji_u1f47e.png',
         '👿': '/images/emoji/GoogleBlob/emoji_u1f47f.png',
         '💊': '/images/emoji/GoogleBlob/emoji_u1f48a.png',
         '💋': '/images/emoji/GoogleBlob/emoji_u1f48b.png',
         '💌': '/images/emoji/GoogleBlob/emoji_u1f48c.png',
         '💍': '/images/emoji/GoogleBlob/emoji_u1f48d.png',
         '💎': '/images/emoji/GoogleBlob/emoji_u1f48e.png',
         '💏': '/images/emoji/GoogleBlob/emoji_u1f48f.png',
         '💚': '/images/emoji/GoogleBlob/emoji_u1f49a.png',
         '💛': '/images/emoji/GoogleBlob/emoji_u1f49b.png',
         '💜': '/images/emoji/GoogleBlob/emoji_u1f49c.png',
         '💝': '/images/emoji/GoogleBlob/emoji_u1f49d.png',
         '💞': '/images/emoji/GoogleBlob/emoji_u1f49e.png',
         '💟': '/images/emoji/GoogleBlob/emoji_u1f49f.png',
         '🔊': '/images/emoji/GoogleBlob/emoji_u1f50a.png',
         '🔋': '/images/emoji/GoogleBlob/emoji_u1f50b.png',
         '🔌': '/images/emoji/GoogleBlob/emoji_u1f50c.png',
         '🔍': '/images/emoji/GoogleBlob/emoji_u1f50d.png',
         '🔎': '/images/emoji/GoogleBlob/emoji_u1f50e.png',
         '🔏': '/images/emoji/GoogleBlob/emoji_u1f50f.png',
         '🔪': '/images/emoji/GoogleBlob/emoji_u1f52a.png',
         '🔫': '/images/emoji/GoogleBlob/emoji_u1f52b.png',
         '🔬': '/images/emoji/GoogleBlob/emoji_u1f52c.png',
         '🔭': '/images/emoji/GoogleBlob/emoji_u1f52d.png',
         '🔮': '/images/emoji/GoogleBlob/emoji_u1f52e.png',
         '🕊': '/images/emoji/GoogleBlob/emoji_u1f54a.png',
         '🕋': '/images/emoji/GoogleBlob/emoji_u1f54b.png',
         '🕌': '/images/emoji/GoogleBlob/emoji_u1f54c.png',
         '🕍': '/images/emoji/GoogleBlob/emoji_u1f54d.png',
         '🕎': '/images/emoji/GoogleBlob/emoji_u1f54e.png',
         '🕚': '/images/emoji/GoogleBlob/emoji_u1f55a.png',
         '🕛': '/images/emoji/GoogleBlob/emoji_u1f55b.png',
         '🕜': '/images/emoji/GoogleBlob/emoji_u1f55c.png',
         '🕝': '/images/emoji/GoogleBlob/emoji_u1f55d.png',
         '🕞': '/images/emoji/GoogleBlob/emoji_u1f55e.png',
         '🕟': '/images/emoji/GoogleBlob/emoji_u1f55f.png',
         '🕯': '/images/emoji/GoogleBlob/emoji_u1f56f.png',
         '🕺': '/images/emoji/GoogleBlob/emoji_u1f57a.png',
         '🖊': '/images/emoji/GoogleBlob/emoji_u1f58a.png',
         '🖋': '/images/emoji/GoogleBlob/emoji_u1f58b.png',
         '🖌': '/images/emoji/GoogleBlob/emoji_u1f58c.png',
         '🖍': '/images/emoji/GoogleBlob/emoji_u1f58d.png',
         '😊': '/images/emoji/GoogleBlob/emoji_u1f60a.png',
         '😋': '/images/emoji/GoogleBlob/emoji_u1f60b.png',
         '😌': '/images/emoji/GoogleBlob/emoji_u1f60c.png',
         '😍': '/images/emoji/GoogleBlob/emoji_u1f60d.png',
         '😎': '/images/emoji/GoogleBlob/emoji_u1f60e.png',
         '😏': '/images/emoji/GoogleBlob/emoji_u1f60f.png',
         '😚': '/images/emoji/GoogleBlob/emoji_u1f61a.png',
         '😛': '/images/emoji/GoogleBlob/emoji_u1f61b.png',
         '😜': '/images/emoji/GoogleBlob/emoji_u1f61c.png',
         '😝': '/images/emoji/GoogleBlob/emoji_u1f61d.png',
         '😞': '/images/emoji/GoogleBlob/emoji_u1f61e.png',
         '😟': '/images/emoji/GoogleBlob/emoji_u1f61f.png',
         '😪': '/images/emoji/GoogleBlob/emoji_u1f62a.png',
         '😫': '/images/emoji/GoogleBlob/emoji_u1f62b.png',
         '😬': '/images/emoji/GoogleBlob/emoji_u1f62c.png',
         '😭': '/images/emoji/GoogleBlob/emoji_u1f62d.png',
         '😮': '/images/emoji/GoogleBlob/emoji_u1f62e.png',
         '😯': '/images/emoji/GoogleBlob/emoji_u1f62f.png',
         '😺': '/images/emoji/GoogleBlob/emoji_u1f63a.png',
         '😻': '/images/emoji/GoogleBlob/emoji_u1f63b.png',
         '😼': '/images/emoji/GoogleBlob/emoji_u1f63c.png',
         '😽': '/images/emoji/GoogleBlob/emoji_u1f63d.png',
         '😾': '/images/emoji/GoogleBlob/emoji_u1f63e.png',
         '😿': '/images/emoji/GoogleBlob/emoji_u1f63f.png',
         '🙊': '/images/emoji/GoogleBlob/emoji_u1f64a.png',
         '🙋': '/images/emoji/GoogleBlob/emoji_u1f64b.png',
         '🙌': '/images/emoji/GoogleBlob/emoji_u1f64c.png',
         '🙍': '/images/emoji/GoogleBlob/emoji_u1f64d.png',
         '🙎': '/images/emoji/GoogleBlob/emoji_u1f64e.png',
         '🙏': '/images/emoji/GoogleBlob/emoji_u1f64f.png',
         '🚊': '/images/emoji/GoogleBlob/emoji_u1f68a.png',
         '🚋': '/images/emoji/GoogleBlob/emoji_u1f68b.png',
         '🚌': '/images/emoji/GoogleBlob/emoji_u1f68c.png',
         '🚍': '/images/emoji/GoogleBlob/emoji_u1f68d.png',
         '🚎': '/images/emoji/GoogleBlob/emoji_u1f68e.png',
         '🚏': '/images/emoji/GoogleBlob/emoji_u1f68f.png',
         '🚚': '/images/emoji/GoogleBlob/emoji_u1f69a.png',
         '🚛': '/images/emoji/GoogleBlob/emoji_u1f69b.png',
         '🚜': '/images/emoji/GoogleBlob/emoji_u1f69c.png',
         '🚝': '/images/emoji/GoogleBlob/emoji_u1f69d.png',
         '🚞': '/images/emoji/GoogleBlob/emoji_u1f69e.png',
         '🚟': '/images/emoji/GoogleBlob/emoji_u1f69f.png',
         '🤚': '/images/emoji/GoogleBlob/emoji_u1f91a.png',
         '🤛': '/images/emoji/GoogleBlob/emoji_u1f91b.png',
         '🤜': '/images/emoji/GoogleBlob/emoji_u1f91c.png',
         '🤝': '/images/emoji/GoogleBlob/emoji_u1f91d.png',
         '🤞': '/images/emoji/GoogleBlob/emoji_u1f91e.png',
         '🤟': '/images/emoji/GoogleBlob/emoji_u1f91f.png',
         '🤪': '/images/emoji/GoogleBlob/emoji_u1f92a.png',
         '🤫': '/images/emoji/GoogleBlob/emoji_u1f92b.png',
         '🤬': '/images/emoji/GoogleBlob/emoji_u1f92c.png',
         '🤭': '/images/emoji/GoogleBlob/emoji_u1f92d.png',
         '🤮': '/images/emoji/GoogleBlob/emoji_u1f92e.png',
         '🤯': '/images/emoji/GoogleBlob/emoji_u1f92f.png',
         '🤺': '/images/emoji/GoogleBlob/emoji_u1f93a.png',
         '🤼': '/images/emoji/GoogleBlob/emoji_u1f93c.png',
         '🤽': '/images/emoji/GoogleBlob/emoji_u1f93d.png',
         '🤾': '/images/emoji/GoogleBlob/emoji_u1f93e.png',
         '🥊': '/images/emoji/GoogleBlob/emoji_u1f94a.png',
         '🥋': '/images/emoji/GoogleBlob/emoji_u1f94b.png',
         '🥌': '/images/emoji/GoogleBlob/emoji_u1f94c.png',
         '🥍': '/images/emoji/GoogleBlob/emoji_u1f94d.png',
         '🥎': '/images/emoji/GoogleBlob/emoji_u1f94e.png',
         '🥏': '/images/emoji/GoogleBlob/emoji_u1f94f.png',
         '🥚': '/images/emoji/GoogleBlob/emoji_u1f95a.png',
         '🥛': '/images/emoji/GoogleBlob/emoji_u1f95b.png',
         '🥜': '/images/emoji/GoogleBlob/emoji_u1f95c.png',
         '🥝': '/images/emoji/GoogleBlob/emoji_u1f95d.png',
         '🥞': '/images/emoji/GoogleBlob/emoji_u1f95e.png',
         '🥟': '/images/emoji/GoogleBlob/emoji_u1f95f.png',
         '🥪': '/images/emoji/GoogleBlob/emoji_u1f96a.png',
         '🥫': '/images/emoji/GoogleBlob/emoji_u1f96b.png',
         '🥬': '/images/emoji/GoogleBlob/emoji_u1f96c.png',
         '🥭': '/images/emoji/GoogleBlob/emoji_u1f96d.png',
         '🥮': '/images/emoji/GoogleBlob/emoji_u1f96e.png',
         '🥯': '/images/emoji/GoogleBlob/emoji_u1f96f.png',
         '🥺': '/images/emoji/GoogleBlob/emoji_u1f97a.png',
         '🥼': '/images/emoji/GoogleBlob/emoji_u1f97c.png',
         '🥽': '/images/emoji/GoogleBlob/emoji_u1f97d.png',
         '🥾': '/images/emoji/GoogleBlob/emoji_u1f97e.png',
         '🥿': '/images/emoji/GoogleBlob/emoji_u1f97f.png',
         '🦊': '/images/emoji/GoogleBlob/emoji_u1f98a.png',
         '🦋': '/images/emoji/GoogleBlob/emoji_u1f98b.png',
         '🦌': '/images/emoji/GoogleBlob/emoji_u1f98c.png',
         '🦍': '/images/emoji/GoogleBlob/emoji_u1f98d.png',
         '🦎': '/images/emoji/GoogleBlob/emoji_u1f98e.png',
         '🦏': '/images/emoji/GoogleBlob/emoji_u1f98f.png',
         '🦚': '/images/emoji/GoogleBlob/emoji_u1f99a.png',
         '🦛': '/images/emoji/GoogleBlob/emoji_u1f99b.png',
         '🦜': '/images/emoji/GoogleBlob/emoji_u1f99c.png',
         '🦝': '/images/emoji/GoogleBlob/emoji_u1f99d.png',
         '🦞': '/images/emoji/GoogleBlob/emoji_u1f99e.png',
         '🦟': '/images/emoji/GoogleBlob/emoji_u1f99f.png',
         '🌀': '/images/emoji/GoogleBlob/emoji_u1f300.png',
         '🌁': '/images/emoji/GoogleBlob/emoji_u1f301.png',
         '🌂': '/images/emoji/GoogleBlob/emoji_u1f302.png',
         '🌃': '/images/emoji/GoogleBlob/emoji_u1f303.png',
         '🌄': '/images/emoji/GoogleBlob/emoji_u1f304.png',
         '🌅': '/images/emoji/GoogleBlob/emoji_u1f305.png',
         '🌆': '/images/emoji/GoogleBlob/emoji_u1f306.png',
         '🌇': '/images/emoji/GoogleBlob/emoji_u1f307.png',
         '🌈': '/images/emoji/GoogleBlob/emoji_u1f308.png',
         '🌉': '/images/emoji/GoogleBlob/emoji_u1f309.png',
         '🌐': '/images/emoji/GoogleBlob/emoji_u1f310.png',
         '🌑': '/images/emoji/GoogleBlob/emoji_u1f311.png',
         '🌒': '/images/emoji/GoogleBlob/emoji_u1f312.png',
         '🌓': '/images/emoji/GoogleBlob/emoji_u1f313.png',
         '🌔': '/images/emoji/GoogleBlob/emoji_u1f314.png',
         '🌕': '/images/emoji/GoogleBlob/emoji_u1f315.png',
         '🌖': '/images/emoji/GoogleBlob/emoji_u1f316.png',
         '🌗': '/images/emoji/GoogleBlob/emoji_u1f317.png',
         '🌘': '/images/emoji/GoogleBlob/emoji_u1f318.png',
         '🌙': '/images/emoji/GoogleBlob/emoji_u1f319.png',
         '🌠': '/images/emoji/GoogleBlob/emoji_u1f320.png',
         '🌡': '/images/emoji/GoogleBlob/emoji_u1f321.png',
         '🌤': '/images/emoji/GoogleBlob/emoji_u1f324.png',
         '🌥': '/images/emoji/GoogleBlob/emoji_u1f325.png',
         '🌦': '/images/emoji/GoogleBlob/emoji_u1f326.png',
         '🌧': '/images/emoji/GoogleBlob/emoji_u1f327.png',
         '🌨': '/images/emoji/GoogleBlob/emoji_u1f328.png',
         '🌩': '/images/emoji/GoogleBlob/emoji_u1f329.png',
         '🌰': '/images/emoji/GoogleBlob/emoji_u1f330.png',
         '🌱': '/images/emoji/GoogleBlob/emoji_u1f331.png',
         '🌲': '/images/emoji/GoogleBlob/emoji_u1f332.png',
         '🌳': '/images/emoji/GoogleBlob/emoji_u1f333.png',
         '🌴': '/images/emoji/GoogleBlob/emoji_u1f334.png',
         '🌵': '/images/emoji/GoogleBlob/emoji_u1f335.png',
         '🌶': '/images/emoji/GoogleBlob/emoji_u1f336.png',
         '🌷': '/images/emoji/GoogleBlob/emoji_u1f337.png',
         '🌸': '/images/emoji/GoogleBlob/emoji_u1f338.png',
         '🌹': '/images/emoji/GoogleBlob/emoji_u1f339.png',
         '🍀': '/images/emoji/GoogleBlob/emoji_u1f340.png',
         '🍁': '/images/emoji/GoogleBlob/emoji_u1f341.png',
         '🍂': '/images/emoji/GoogleBlob/emoji_u1f342.png',
         '🍃': '/images/emoji/GoogleBlob/emoji_u1f343.png',
         '🍄': '/images/emoji/GoogleBlob/emoji_u1f344.png',
         '🍅': '/images/emoji/GoogleBlob/emoji_u1f345.png',
         '🍆': '/images/emoji/GoogleBlob/emoji_u1f346.png',
         '🍇': '/images/emoji/GoogleBlob/emoji_u1f347.png',
         '🍈': '/images/emoji/GoogleBlob/emoji_u1f348.png',
         '🍉': '/images/emoji/GoogleBlob/emoji_u1f349.png',
         '🍐': '/images/emoji/GoogleBlob/emoji_u1f350.png',
         '🍑': '/images/emoji/GoogleBlob/emoji_u1f351.png',
         '🍒': '/images/emoji/GoogleBlob/emoji_u1f352.png',
         '🍓': '/images/emoji/GoogleBlob/emoji_u1f353.png',
         '🍔': '/images/emoji/GoogleBlob/emoji_u1f354.png',
         '🍕': '/images/emoji/GoogleBlob/emoji_u1f355.png',
         '🍖': '/images/emoji/GoogleBlob/emoji_u1f356.png',
         '🍗': '/images/emoji/GoogleBlob/emoji_u1f357.png',
         '🍘': '/images/emoji/GoogleBlob/emoji_u1f358.png',
         '🍙': '/images/emoji/GoogleBlob/emoji_u1f359.png',
         '🍠': '/images/emoji/GoogleBlob/emoji_u1f360.png',
         '🍡': '/images/emoji/GoogleBlob/emoji_u1f361.png',
         '🍢': '/images/emoji/GoogleBlob/emoji_u1f362.png',
         '🍣': '/images/emoji/GoogleBlob/emoji_u1f363.png',
         '🍤': '/images/emoji/GoogleBlob/emoji_u1f364.png',
         '🍥': '/images/emoji/GoogleBlob/emoji_u1f365.png',
         '🍦': '/images/emoji/GoogleBlob/emoji_u1f366.png',
         '🍧': '/images/emoji/GoogleBlob/emoji_u1f367.png',
         '🍨': '/images/emoji/GoogleBlob/emoji_u1f368.png',
         '🍩': '/images/emoji/GoogleBlob/emoji_u1f369.png',
         '🍰': '/images/emoji/GoogleBlob/emoji_u1f370.png',
         '🍱': '/images/emoji/GoogleBlob/emoji_u1f371.png',
         '🍲': '/images/emoji/GoogleBlob/emoji_u1f372.png',
         '🍳': '/images/emoji/GoogleBlob/emoji_u1f373.png',
         '🍴': '/images/emoji/GoogleBlob/emoji_u1f374.png',
         '🍵': '/images/emoji/GoogleBlob/emoji_u1f375.png',
         '🍶': '/images/emoji/GoogleBlob/emoji_u1f376.png',
         '🍷': '/images/emoji/GoogleBlob/emoji_u1f377.png',
         '🍸': '/images/emoji/GoogleBlob/emoji_u1f378.png',
         '🍹': '/images/emoji/GoogleBlob/emoji_u1f379.png',
         '🎀': '/images/emoji/GoogleBlob/emoji_u1f380.png',
         '🎁': '/images/emoji/GoogleBlob/emoji_u1f381.png',
         '🎂': '/images/emoji/GoogleBlob/emoji_u1f382.png',
         '🎃': '/images/emoji/GoogleBlob/emoji_u1f383.png',
         '🎄': '/images/emoji/GoogleBlob/emoji_u1f384.png',
         '🎅': '/images/emoji/GoogleBlob/emoji_u1f385.png',
         '🎆': '/images/emoji/GoogleBlob/emoji_u1f386.png',
         '🎇': '/images/emoji/GoogleBlob/emoji_u1f387.png',
         '🎈': '/images/emoji/GoogleBlob/emoji_u1f388.png',
         '🎉': '/images/emoji/GoogleBlob/emoji_u1f389.png',
         '🎐': '/images/emoji/GoogleBlob/emoji_u1f390.png',
         '🎑': '/images/emoji/GoogleBlob/emoji_u1f391.png',
         '🎒': '/images/emoji/GoogleBlob/emoji_u1f392.png',
         '🎓': '/images/emoji/GoogleBlob/emoji_u1f393.png',
         '🎖': '/images/emoji/GoogleBlob/emoji_u1f396.png',
         '🎗': '/images/emoji/GoogleBlob/emoji_u1f397.png',
         '🎙': '/images/emoji/GoogleBlob/emoji_u1f399.png',
         '👀': '/images/emoji/GoogleBlob/emoji_u1f440.png',
         '👁': '/images/emoji/GoogleBlob/emoji_u1f441.png',
         '👂': '/images/emoji/GoogleBlob/emoji_u1f442.png',
         '👃': '/images/emoji/GoogleBlob/emoji_u1f443.png',
         '👄': '/images/emoji/GoogleBlob/emoji_u1f444.png',
         '👅': '/images/emoji/GoogleBlob/emoji_u1f445.png',
         '👆': '/images/emoji/GoogleBlob/emoji_u1f446.png',
         '👇': '/images/emoji/GoogleBlob/emoji_u1f447.png',
         '👈': '/images/emoji/GoogleBlob/emoji_u1f448.png',
         '👉': '/images/emoji/GoogleBlob/emoji_u1f449.png',
         '👐': '/images/emoji/GoogleBlob/emoji_u1f450.png',
         '👑': '/images/emoji/GoogleBlob/emoji_u1f451.png',
         '👒': '/images/emoji/GoogleBlob/emoji_u1f452.png',
         '👓': '/images/emoji/GoogleBlob/emoji_u1f453.png',
         '👔': '/images/emoji/GoogleBlob/emoji_u1f454.png',
         '👕': '/images/emoji/GoogleBlob/emoji_u1f455.png',
         '👖': '/images/emoji/GoogleBlob/emoji_u1f456.png',
         '👗': '/images/emoji/GoogleBlob/emoji_u1f457.png',
         '👘': '/images/emoji/GoogleBlob/emoji_u1f458.png',
         '👙': '/images/emoji/GoogleBlob/emoji_u1f459.png',
         '👠': '/images/emoji/GoogleBlob/emoji_u1f460.png',
         '👡': '/images/emoji/GoogleBlob/emoji_u1f461.png',
         '👢': '/images/emoji/GoogleBlob/emoji_u1f462.png',
         '👣': '/images/emoji/GoogleBlob/emoji_u1f463.png',
         '👤': '/images/emoji/GoogleBlob/emoji_u1f464.png',
         '👥': '/images/emoji/GoogleBlob/emoji_u1f465.png',
         '👦': '/images/emoji/GoogleBlob/emoji_u1f466.png',
         '👧': '/images/emoji/GoogleBlob/emoji_u1f467.png',
         '👨': '/images/emoji/GoogleBlob/emoji_u1f468.png',
         '👩': '/images/emoji/GoogleBlob/emoji_u1f469.png',
         '👰': '/images/emoji/GoogleBlob/emoji_u1f470.png',
         '👱': '/images/emoji/GoogleBlob/emoji_u1f471.png',
         '👲': '/images/emoji/GoogleBlob/emoji_u1f472.png',
         '👳': '/images/emoji/GoogleBlob/emoji_u1f473.png',
         '👴': '/images/emoji/GoogleBlob/emoji_u1f474.png',
         '👵': '/images/emoji/GoogleBlob/emoji_u1f475.png',
         '👶': '/images/emoji/GoogleBlob/emoji_u1f476.png',
         '👷': '/images/emoji/GoogleBlob/emoji_u1f477.png',
         '👸': '/images/emoji/GoogleBlob/emoji_u1f478.png',
         '👹': '/images/emoji/GoogleBlob/emoji_u1f479.png',
         '💀': '/images/emoji/GoogleBlob/emoji_u1f480.png',
         '💁': '/images/emoji/GoogleBlob/emoji_u1f481.png',
         '💂': '/images/emoji/GoogleBlob/emoji_u1f482.png',
         '💃': '/images/emoji/GoogleBlob/emoji_u1f483.png',
         '💄': '/images/emoji/GoogleBlob/emoji_u1f484.png',
         '💅': '/images/emoji/GoogleBlob/emoji_u1f485.png',
         '💆': '/images/emoji/GoogleBlob/emoji_u1f486.png',
         '💇': '/images/emoji/GoogleBlob/emoji_u1f487.png',
         '💈': '/images/emoji/GoogleBlob/emoji_u1f488.png',
         '💉': '/images/emoji/GoogleBlob/emoji_u1f489.png',
         '💐': '/images/emoji/GoogleBlob/emoji_u1f490.png',
         '💑': '/images/emoji/GoogleBlob/emoji_u1f491.png',
         '💒': '/images/emoji/GoogleBlob/emoji_u1f492.png',
         '💓': '/images/emoji/GoogleBlob/emoji_u1f493.png',
         '💔': '/images/emoji/GoogleBlob/emoji_u1f494.png',
         '💕': '/images/emoji/GoogleBlob/emoji_u1f495.png',
         '💖': '/images/emoji/GoogleBlob/emoji_u1f496.png',
         '💗': '/images/emoji/GoogleBlob/emoji_u1f497.png',
         '💘': '/images/emoji/GoogleBlob/emoji_u1f498.png',
         '💙': '/images/emoji/GoogleBlob/emoji_u1f499.png',
         '🔅': '/images/emoji/GoogleBlob/emoji_u1f505.png',
         '🔆': '/images/emoji/GoogleBlob/emoji_u1f506.png',
         '🔈': '/images/emoji/GoogleBlob/emoji_u1f508.png',
         '🔉': '/images/emoji/GoogleBlob/emoji_u1f509.png',
         '🔐': '/images/emoji/GoogleBlob/emoji_u1f510.png',
         '🔑': '/images/emoji/GoogleBlob/emoji_u1f511.png',
         '🔒': '/images/emoji/GoogleBlob/emoji_u1f512.png',
         '🔓': '/images/emoji/GoogleBlob/emoji_u1f513.png',
         '🔔': '/images/emoji/GoogleBlob/emoji_u1f514.png',
         '🔖': '/images/emoji/GoogleBlob/emoji_u1f516.png',
         '🔗': '/images/emoji/GoogleBlob/emoji_u1f517.png',
         '🔘': '/images/emoji/GoogleBlob/emoji_u1f518.png',
         '🔥': '/images/emoji/GoogleBlob/emoji_u1f525.png',
         '🔰': '/images/emoji/GoogleBlob/emoji_u1f530.png',
         '🔱': '/images/emoji/GoogleBlob/emoji_u1f531.png',
         '🕰': '/images/emoji/GoogleBlob/emoji_u1f570.png',
         '🕳': '/images/emoji/GoogleBlob/emoji_u1f573.png',
         '🕴': '/images/emoji/GoogleBlob/emoji_u1f574.png',
         '🕵': '/images/emoji/GoogleBlob/emoji_u1f575.png',
         '🕶': '/images/emoji/GoogleBlob/emoji_u1f576.png',
         '🕷': '/images/emoji/GoogleBlob/emoji_u1f577.png',
         '🕸': '/images/emoji/GoogleBlob/emoji_u1f578.png',
         '🕹': '/images/emoji/GoogleBlob/emoji_u1f579.png',
         '🖇': '/images/emoji/GoogleBlob/emoji_u1f587.png',
         '🖐': '/images/emoji/GoogleBlob/emoji_u1f590.png',
         '🖕': '/images/emoji/GoogleBlob/emoji_u1f595.png',
         '🖖': '/images/emoji/GoogleBlob/emoji_u1f596.png',
         '😀': '/images/emoji/GoogleBlob/emoji_u1f600.png',
         '😁': '/images/emoji/GoogleBlob/emoji_u1f601.png',
         '😂': '/images/emoji/GoogleBlob/emoji_u1f602.png',
         '😃': '/images/emoji/GoogleBlob/emoji_u1f603.png',
         '😄': '/images/emoji/GoogleBlob/emoji_u1f604.png',
         '😅': '/images/emoji/GoogleBlob/emoji_u1f605.png',
         '😆': '/images/emoji/GoogleBlob/emoji_u1f606.png',
         '😇': '/images/emoji/GoogleBlob/emoji_u1f607.png',
         '😈': '/images/emoji/GoogleBlob/emoji_u1f608.png',
         '😉': '/images/emoji/GoogleBlob/emoji_u1f609.png',
         '😐': '/images/emoji/GoogleBlob/emoji_u1f610.png',
         '😑': '/images/emoji/GoogleBlob/emoji_u1f611.png',
         '😒': '/images/emoji/GoogleBlob/emoji_u1f612.png',
         '😓': '/images/emoji/GoogleBlob/emoji_u1f613.png',
         '😔': '/images/emoji/GoogleBlob/emoji_u1f614.png',
         '😕': '/images/emoji/GoogleBlob/emoji_u1f615.png',
         '😖': '/images/emoji/GoogleBlob/emoji_u1f616.png',
         '😗': '/images/emoji/GoogleBlob/emoji_u1f617.png',
         '😘': '/images/emoji/GoogleBlob/emoji_u1f618.png',
         '😙': '/images/emoji/GoogleBlob/emoji_u1f619.png',
         '😠': '/images/emoji/GoogleBlob/emoji_u1f620.png',
         '😡': '/images/emoji/GoogleBlob/emoji_u1f621.png',
         '😢': '/images/emoji/GoogleBlob/emoji_u1f622.png',
         '😣': '/images/emoji/GoogleBlob/emoji_u1f623.png',
         '😤': '/images/emoji/GoogleBlob/emoji_u1f624.png',
         '😥': '/images/emoji/GoogleBlob/emoji_u1f625.png',
         '😦': '/images/emoji/GoogleBlob/emoji_u1f626.png',
         '😧': '/images/emoji/GoogleBlob/emoji_u1f627.png',
         '😨': '/images/emoji/GoogleBlob/emoji_u1f628.png',
         '😩': '/images/emoji/GoogleBlob/emoji_u1f629.png',
         '😰': '/images/emoji/GoogleBlob/emoji_u1f630.png',
         '😱': '/images/emoji/GoogleBlob/emoji_u1f631.png',
         '😲': '/images/emoji/GoogleBlob/emoji_u1f632.png',
         '😳': '/images/emoji/GoogleBlob/emoji_u1f633.png',
         '😴': '/images/emoji/GoogleBlob/emoji_u1f634.png',
         '😵': '/images/emoji/GoogleBlob/emoji_u1f635.png',
         '😶': '/images/emoji/GoogleBlob/emoji_u1f636.png',
         '😷': '/images/emoji/GoogleBlob/emoji_u1f637.png',
         '😸': '/images/emoji/GoogleBlob/emoji_u1f638.png',
         '😹': '/images/emoji/GoogleBlob/emoji_u1f639.png',
         '🙀': '/images/emoji/GoogleBlob/emoji_u1f640.png',
         '🙁': '/images/emoji/GoogleBlob/emoji_u1f641.png',
         '🙂': '/images/emoji/GoogleBlob/emoji_u1f642.png',
         '🙃': '/images/emoji/GoogleBlob/emoji_u1f643.png',
         '🙄': '/images/emoji/GoogleBlob/emoji_u1f644.png',
         '🙅': '/images/emoji/GoogleBlob/emoji_u1f645.png',
         '🙆': '/images/emoji/GoogleBlob/emoji_u1f646.png',
         '🙇': '/images/emoji/GoogleBlob/emoji_u1f647.png',
         '🙈': '/images/emoji/GoogleBlob/emoji_u1f648.png',
         '🙉': '/images/emoji/GoogleBlob/emoji_u1f649.png',
         '🤐': '/images/emoji/GoogleBlob/emoji_u1f910.png',
         '🤑': '/images/emoji/GoogleBlob/emoji_u1f911.png',
         '🤒': '/images/emoji/GoogleBlob/emoji_u1f912.png',
         '🤓': '/images/emoji/GoogleBlob/emoji_u1f913.png',
         '🤔': '/images/emoji/GoogleBlob/emoji_u1f914.png',
         '🤕': '/images/emoji/GoogleBlob/emoji_u1f915.png',
         '🤖': '/images/emoji/GoogleBlob/emoji_u1f916.png',
         '🤗': '/images/emoji/GoogleBlob/emoji_u1f917.png',
         '🤘': '/images/emoji/GoogleBlob/emoji_u1f918.png',
         '🤙': '/images/emoji/GoogleBlob/emoji_u1f919.png',
         '🤠': '/images/emoji/GoogleBlob/emoji_u1f920.png',
         '🤡': '/images/emoji/GoogleBlob/emoji_u1f921.png',
         '🤢': '/images/emoji/GoogleBlob/emoji_u1f922.png',
         '🤣': '/images/emoji/GoogleBlob/emoji_u1f923.png',
         '🤤': '/images/emoji/GoogleBlob/emoji_u1f924.png',
         '🤥': '/images/emoji/GoogleBlob/emoji_u1f925.png',
         '🤦': '/images/emoji/GoogleBlob/emoji_u1f926.png',
         '🤧': '/images/emoji/GoogleBlob/emoji_u1f927.png',
         '🤨': '/images/emoji/GoogleBlob/emoji_u1f928.png',
         '🤩': '/images/emoji/GoogleBlob/emoji_u1f929.png',
         '🤰': '/images/emoji/GoogleBlob/emoji_u1f930.png',
         '🤱': '/images/emoji/GoogleBlob/emoji_u1f931.png',
         '🤲': '/images/emoji/GoogleBlob/emoji_u1f932.png',
         '🤳': '/images/emoji/GoogleBlob/emoji_u1f933.png',
         '🤴': '/images/emoji/GoogleBlob/emoji_u1f934.png',
         '🤵': '/images/emoji/GoogleBlob/emoji_u1f935.png',
         '🤶': '/images/emoji/GoogleBlob/emoji_u1f936.png',
         '🤷': '/images/emoji/GoogleBlob/emoji_u1f937.png',
         '🤸': '/images/emoji/GoogleBlob/emoji_u1f938.png',
         '🤹': '/images/emoji/GoogleBlob/emoji_u1f939.png',
         '🥀': '/images/emoji/GoogleBlob/emoji_u1f940.png',
         '🥁': '/images/emoji/GoogleBlob/emoji_u1f941.png',
         '🥂': '/images/emoji/GoogleBlob/emoji_u1f942.png',
         '🥃': '/images/emoji/GoogleBlob/emoji_u1f943.png',
         '🥄': '/images/emoji/GoogleBlob/emoji_u1f944.png',
         '🥅': '/images/emoji/GoogleBlob/emoji_u1f945.png',
         '🥇': '/images/emoji/GoogleBlob/emoji_u1f947.png',
         '🥈': '/images/emoji/GoogleBlob/emoji_u1f948.png',
         '🥉': '/images/emoji/GoogleBlob/emoji_u1f949.png',
         '🥰': '/images/emoji/GoogleBlob/emoji_u1f970.png',
         '🥱': '/images/emoji/GoogleBlob/emoji_u1f971.png',
         '🥳': '/images/emoji/GoogleBlob/emoji_u1f973.png',
         '🥴': '/images/emoji/GoogleBlob/emoji_u1f974.png',
         '🥵': '/images/emoji/GoogleBlob/emoji_u1f975.png',
         '🥶': '/images/emoji/GoogleBlob/emoji_u1f976.png',
         '⚰': '/images/emoji/GoogleBlob/emoji_u26b0.png',
         '⚱': '/images/emoji/GoogleBlob/emoji_u26b1.png',
         '⚽': '/images/emoji/GoogleBlob/emoji_u26bd.png',
         '⚾': '/images/emoji/GoogleBlob/emoji_u26be.png',
         '⛄': '/images/emoji/GoogleBlob/emoji_u26c4.png',
         '⛅': '/images/emoji/GoogleBlob/emoji_u26c5.png',
         '⛈': '/images/emoji/GoogleBlob/emoji_u26c8.png',
         '⛏': '/images/emoji/GoogleBlob/emoji_u26cf.png',
         '⛑': '/images/emoji/GoogleBlob/emoji_u26d1.png',
         '⛓': '/images/emoji/GoogleBlob/emoji_u26d3.png',
         '⛩': '/images/emoji/GoogleBlob/emoji_u26e9.png',
         '⛪': '/images/emoji/GoogleBlob/emoji_u26ea.png',
         '⛰': '/images/emoji/GoogleBlob/emoji_u26f0.png',
         '⛱': '/images/emoji/GoogleBlob/emoji_u26f1.png',
         '⛲': '/images/emoji/GoogleBlob/emoji_u26f2.png',
         '⛳': '/images/emoji/GoogleBlob/emoji_u26f3.png',
         '⛴': '/images/emoji/GoogleBlob/emoji_u26f4.png',
         '⛵': '/images/emoji/GoogleBlob/emoji_u26f5.png',
         '⛷': '/images/emoji/GoogleBlob/emoji_u26f7.png',
         '⛸': '/images/emoji/GoogleBlob/emoji_u26f8.png',
         '⛹': '/images/emoji/GoogleBlob/emoji_u26f9.png',
         '⛺': '/images/emoji/GoogleBlob/emoji_u26fa.png',
         '⛽': '/images/emoji/GoogleBlob/emoji_u26fd.png',
         '➰': '/images/emoji/GoogleBlob/emoji_u27b0.png',
         '‼': '/images/emoji/GoogleBlob/emoji_u203c.png',
         '⌚': '/images/emoji/GoogleBlob/emoji_u231a.png',
         '⌛': '/images/emoji/GoogleBlob/emoji_u231b.png',
         '☎': '/images/emoji/GoogleBlob/emoji_u260e.png',
         '☝': '/images/emoji/GoogleBlob/emoji_u261d.png',
         '✊': '/images/emoji/GoogleBlob/emoji_u270a.png',
         '✋': '/images/emoji/GoogleBlob/emoji_u270b.png',
         '✌': '/images/emoji/GoogleBlob/emoji_u270c.png',
         '✍': '/images/emoji/GoogleBlob/emoji_u270d.png',
         '✏': '/images/emoji/GoogleBlob/emoji_u270f.png',
         '✝': '/images/emoji/GoogleBlob/emoji_u271d.png',
         '⌨': '/images/emoji/GoogleBlob/emoji_u2328.png',
         '☀': '/images/emoji/GoogleBlob/emoji_u2600.png',
         '☁': '/images/emoji/GoogleBlob/emoji_u2601.png',
         '☂': '/images/emoji/GoogleBlob/emoji_u2602.png',
         '☃': '/images/emoji/GoogleBlob/emoji_u2603.png',
         '☄': '/images/emoji/GoogleBlob/emoji_u2604.png',
         '☑': '/images/emoji/GoogleBlob/emoji_u2611.png',
         '☔': '/images/emoji/GoogleBlob/emoji_u2614.png',
         '☕': '/images/emoji/GoogleBlob/emoji_u2615.png',
         '☘': '/images/emoji/GoogleBlob/emoji_u2618.png',
         '♨': '/images/emoji/GoogleBlob/emoji_u2668.png',
         '⚒': '/images/emoji/GoogleBlob/emoji_u2692.png',
         '⚓': '/images/emoji/GoogleBlob/emoji_u2693.png',
         '⚔': '/images/emoji/GoogleBlob/emoji_u2694.png',
         '⚕': '/images/emoji/GoogleBlob/emoji_u2695.png',
         '⚖': '/images/emoji/GoogleBlob/emoji_u2696.png',
         '⚗': '/images/emoji/GoogleBlob/emoji_u2697.png',
         '⚙': '/images/emoji/GoogleBlob/emoji_u2699.png',
         '✂': '/images/emoji/GoogleBlob/emoji_u2702.png',
         '✈': '/images/emoji/GoogleBlob/emoji_u2708.png',
         '✉': '/images/emoji/GoogleBlob/emoji_u2709.png',
         '✒': '/images/emoji/GoogleBlob/emoji_u2712.png',
         '✔': '/images/emoji/GoogleBlob/emoji_u2714.png',
         '✖': '/images/emoji/GoogleBlob/emoji_u2716.png',
         '✡': '/images/emoji/GoogleBlob/emoji_u2721.png',
         '✨': '/images/emoji/GoogleBlob/emoji_u2728.png',
         '✳': '/images/emoji/GoogleBlob/emoji_u2733.png',
         '✴': '/images/emoji/GoogleBlob/emoji_u2734.png',
         '❄': '/images/emoji/GoogleBlob/emoji_u2744.png',
         '❇': '/images/emoji/GoogleBlob/emoji_u2747.png'
      },
      "Nature": {
        '🐊': '/images/emoji/GoogleBlob/emoji_u1f40a.png',
        '🐋': '/images/emoji/GoogleBlob/emoji_u1f40b.png',
        '🐌': '/images/emoji/GoogleBlob/emoji_u1f40c.png',
        '🐍': '/images/emoji/GoogleBlob/emoji_u1f40d.png',
        '🐎': '/images/emoji/GoogleBlob/emoji_u1f40e.png',
        '🐏': '/images/emoji/GoogleBlob/emoji_u1f40f.png',
        '🐚': '/images/emoji/GoogleBlob/emoji_u1f41a.png',
        '🐛': '/images/emoji/GoogleBlob/emoji_u1f41b.png',
        '🐜': '/images/emoji/GoogleBlob/emoji_u1f41c.png',
        '🐝': '/images/emoji/GoogleBlob/emoji_u1f41d.png',
        '🐞': '/images/emoji/GoogleBlob/emoji_u1f41e.png',
        '🐟': '/images/emoji/GoogleBlob/emoji_u1f41f.png',
        '🐪': '/images/emoji/GoogleBlob/emoji_u1f42a.png',
        '🐫': '/images/emoji/GoogleBlob/emoji_u1f42b.png',
        '🐬': '/images/emoji/GoogleBlob/emoji_u1f42c.png',
        '🐭': '/images/emoji/GoogleBlob/emoji_u1f42d.png',
        '🐮': '/images/emoji/GoogleBlob/emoji_u1f42e.png',
        '🐯': '/images/emoji/GoogleBlob/emoji_u1f42f.png',
        '🐺': '/images/emoji/GoogleBlob/emoji_u1f43a.png',
        '🐻': '/images/emoji/GoogleBlob/emoji_u1f43b.png',
        '🐼': '/images/emoji/GoogleBlob/emoji_u1f43c.png',
        '🐀': '/images/emoji/GoogleBlob/emoji_u1f400.png',
        '🐁': '/images/emoji/GoogleBlob/emoji_u1f401.png',
        '🐂': '/images/emoji/GoogleBlob/emoji_u1f402.png',
        '🐃': '/images/emoji/GoogleBlob/emoji_u1f403.png',
        '🐄': '/images/emoji/GoogleBlob/emoji_u1f404.png',
        '🐅': '/images/emoji/GoogleBlob/emoji_u1f405.png',
        '🐆': '/images/emoji/GoogleBlob/emoji_u1f406.png',
        '🐇': '/images/emoji/GoogleBlob/emoji_u1f407.png',
        '🐈': '/images/emoji/GoogleBlob/emoji_u1f408.png',
        '🐉': '/images/emoji/GoogleBlob/emoji_u1f409.png',
        '🐐': '/images/emoji/GoogleBlob/emoji_u1f410.png',
        '🐑': '/images/emoji/GoogleBlob/emoji_u1f411.png',
        '🐒': '/images/emoji/GoogleBlob/emoji_u1f412.png',
        '🐓': '/images/emoji/GoogleBlob/emoji_u1f413.png',
        '🐔': '/images/emoji/GoogleBlob/emoji_u1f414.png',
        '🐕': '/images/emoji/GoogleBlob/emoji_u1f415.png',
        '🐖': '/images/emoji/GoogleBlob/emoji_u1f416.png',
        '🐗': '/images/emoji/GoogleBlob/emoji_u1f417.png',
        '🐘': '/images/emoji/GoogleBlob/emoji_u1f418.png',
        '🐙': '/images/emoji/GoogleBlob/emoji_u1f419.png',
        '🐠': '/images/emoji/GoogleBlob/emoji_u1f420.png',
        '🐡': '/images/emoji/GoogleBlob/emoji_u1f421.png',
        '🐢': '/images/emoji/GoogleBlob/emoji_u1f422.png',
        '🐣': '/images/emoji/GoogleBlob/emoji_u1f423.png',
        '🐤': '/images/emoji/GoogleBlob/emoji_u1f424.png',
        '🐥': '/images/emoji/GoogleBlob/emoji_u1f425.png',
        '🐦': '/images/emoji/GoogleBlob/emoji_u1f426.png',
        '🐧': '/images/emoji/GoogleBlob/emoji_u1f427.png',
        '🐨': '/images/emoji/GoogleBlob/emoji_u1f428.png',
        '🐩': '/images/emoji/GoogleBlob/emoji_u1f429.png',
        '🐰': '/images/emoji/GoogleBlob/emoji_u1f430.png',
        '🐱': '/images/emoji/GoogleBlob/emoji_u1f431.png',
        '🐲': '/images/emoji/GoogleBlob/emoji_u1f432.png',
        '🐳': '/images/emoji/GoogleBlob/emoji_u1f433.png',
        '🐴': '/images/emoji/GoogleBlob/emoji_u1f434.png',
        '🐵': '/images/emoji/GoogleBlob/emoji_u1f435.png',
        '🐶': '/images/emoji/GoogleBlob/emoji_u1f436.png',
        '🐷': '/images/emoji/GoogleBlob/emoji_u1f437.png',
        '🐸': '/images/emoji/GoogleBlob/emoji_u1f438.png',
        '🐹': '/images/emoji/GoogleBlob/emoji_u1f439.png',
        '🦀': '/images/emoji/GoogleBlob/emoji_u1f980.png',
        '🦁': '/images/emoji/GoogleBlob/emoji_u1f981.png',
        '🦂': '/images/emoji/GoogleBlob/emoji_u1f982.png',
        '🦃': '/images/emoji/GoogleBlob/emoji_u1f983.png',
        '🦄': '/images/emoji/GoogleBlob/emoji_u1f984.png',
        '🦅': '/images/emoji/GoogleBlob/emoji_u1f985.png',
        '🦆': '/images/emoji/GoogleBlob/emoji_u1f986.png',
        '🦇': '/images/emoji/GoogleBlob/emoji_u1f987.png',
        '🦈': '/images/emoji/GoogleBlob/emoji_u1f988.png',
        '🦉': '/images/emoji/GoogleBlob/emoji_u1f989.png',
        '🦐': '/images/emoji/GoogleBlob/emoji_u1f990.png',
        '🦑': '/images/emoji/GoogleBlob/emoji_u1f991.png',
        '🦒': '/images/emoji/GoogleBlob/emoji_u1f992.png',
        '🦓': '/images/emoji/GoogleBlob/emoji_u1f993.png',
        '🦔': '/images/emoji/GoogleBlob/emoji_u1f994.png',
        '🦕': '/images/emoji/GoogleBlob/emoji_u1f995.png',
        '🦖': '/images/emoji/GoogleBlob/emoji_u1f996.png',
        '🦗': '/images/emoji/GoogleBlob/emoji_u1f997.png'
      },
      "Food": {
        '🥐': '/images/emoji/GoogleBlob/emoji_u1f950.png',
        '🥑': '/images/emoji/GoogleBlob/emoji_u1f951.png',
        '🥒': '/images/emoji/GoogleBlob/emoji_u1f952.png',
        '🥓': '/images/emoji/GoogleBlob/emoji_u1f953.png',
        '🥔': '/images/emoji/GoogleBlob/emoji_u1f954.png',
        '🥕': '/images/emoji/GoogleBlob/emoji_u1f955.png',
        '🥖': '/images/emoji/GoogleBlob/emoji_u1f956.png',
        '🥗': '/images/emoji/GoogleBlob/emoji_u1f957.png',
        '🥘': '/images/emoji/GoogleBlob/emoji_u1f958.png',
        '🥙': '/images/emoji/GoogleBlob/emoji_u1f959.png',
        '🥠': '/images/emoji/GoogleBlob/emoji_u1f960.png',
        '🥡': '/images/emoji/GoogleBlob/emoji_u1f961.png',
        '🥢': '/images/emoji/GoogleBlob/emoji_u1f962.png',
        '🥣': '/images/emoji/GoogleBlob/emoji_u1f963.png',
        '🥤': '/images/emoji/GoogleBlob/emoji_u1f964.png',
        '🥥': '/images/emoji/GoogleBlob/emoji_u1f965.png',
        '🥦': '/images/emoji/GoogleBlob/emoji_u1f966.png',
        '🥧': '/images/emoji/GoogleBlob/emoji_u1f967.png',
        '🥨': '/images/emoji/GoogleBlob/emoji_u1f968.png',
        '🥩': '/images/emoji/GoogleBlob/emoji_u1f969.png'
      },
      "Activities": {
        '🎠': '/images/emoji/GoogleBlob/emoji_u1f3a0.png',
        '🎡': '/images/emoji/GoogleBlob/emoji_u1f3a1.png',
        '🎢': '/images/emoji/GoogleBlob/emoji_u1f3a2.png',
        '🎣': '/images/emoji/GoogleBlob/emoji_u1f3a3.png',
        '🎤': '/images/emoji/GoogleBlob/emoji_u1f3a4.png',
        '🎥': '/images/emoji/GoogleBlob/emoji_u1f3a5.png',
        '🎦': '/images/emoji/GoogleBlob/emoji_u1f3a6.png',
        '🎧': '/images/emoji/GoogleBlob/emoji_u1f3a7.png',
        '🎨': '/images/emoji/GoogleBlob/emoji_u1f3a8.png',
        '🎩': '/images/emoji/GoogleBlob/emoji_u1f3a9.png',
        '🎪': '/images/emoji/GoogleBlob/emoji_u1f3aa.png',
        '🎫': '/images/emoji/GoogleBlob/emoji_u1f3ab.png',
        '🎬': '/images/emoji/GoogleBlob/emoji_u1f3ac.png',
        '🎭': '/images/emoji/GoogleBlob/emoji_u1f3ad.png',
        '🎮': '/images/emoji/GoogleBlob/emoji_u1f3ae.png',
        '🎯': '/images/emoji/GoogleBlob/emoji_u1f3af.png',
        '🎰': '/images/emoji/GoogleBlob/emoji_u1f3b0.png',
        '🎱': '/images/emoji/GoogleBlob/emoji_u1f3b1.png',
        '🎲': '/images/emoji/GoogleBlob/emoji_u1f3b2.png',
        '🎳': '/images/emoji/GoogleBlob/emoji_u1f3b3.png',
        '🎴': '/images/emoji/GoogleBlob/emoji_u1f3b4.png',
        '🎵': '/images/emoji/GoogleBlob/emoji_u1f3b5.png',
        '🎶': '/images/emoji/GoogleBlob/emoji_u1f3b6.png',
        '🎷': '/images/emoji/GoogleBlob/emoji_u1f3b7.png',
        '🎸': '/images/emoji/GoogleBlob/emoji_u1f3b8.png',
        '🎹': '/images/emoji/GoogleBlob/emoji_u1f3b9.png',
        '🎺': '/images/emoji/GoogleBlob/emoji_u1f3ba.png',
        '🎻': '/images/emoji/GoogleBlob/emoji_u1f3bb.png',
        '🎼': '/images/emoji/GoogleBlob/emoji_u1f3bc.png',
        '🎽': '/images/emoji/GoogleBlob/emoji_u1f3bd.png',
        '🎾': '/images/emoji/GoogleBlob/emoji_u1f3be.png',
        '🎿': '/images/emoji/GoogleBlob/emoji_u1f3bf.png',
        '🏀': '/images/emoji/GoogleBlob/emoji_u1f3c0.png',
        '🏁': '/images/emoji/GoogleBlob/emoji_u1f3c1.png',
        '🏂': '/images/emoji/GoogleBlob/emoji_u1f3c2.png',
        '🏃': '/images/emoji/GoogleBlob/emoji_u1f3c3.png',
        '🏄': '/images/emoji/GoogleBlob/emoji_u1f3c4.png',
        '🏅': '/images/emoji/GoogleBlob/emoji_u1f3c5.png',
        '🏆': '/images/emoji/GoogleBlob/emoji_u1f3c6.png',
        '🏇': '/images/emoji/GoogleBlob/emoji_u1f3c7.png',
        '🏈': '/images/emoji/GoogleBlob/emoji_u1f3c8.png',
        '🏉': '/images/emoji/GoogleBlob/emoji_u1f3c9.png',
        '🏊': '/images/emoji/GoogleBlob/emoji_u1f3ca.png',
        '🏋': '/images/emoji/GoogleBlob/emoji_u1f3cb.png',
        '🏌': '/images/emoji/GoogleBlob/emoji_u1f3cc.png',
        '🏍': '/images/emoji/GoogleBlob/emoji_u1f3cd.png',
        '🏎': '/images/emoji/GoogleBlob/emoji_u1f3ce.png',
        '🏏': '/images/emoji/GoogleBlob/emoji_u1f3cf.png',
        '🏐': '/images/emoji/GoogleBlob/emoji_u1f3d0.png',
        '🏑': '/images/emoji/GoogleBlob/emoji_u1f3d1.png',
        '🏒': '/images/emoji/GoogleBlob/emoji_u1f3d2.png',
        '🏓': '/images/emoji/GoogleBlob/emoji_u1f3d3.png'
      },
      "Travel": {
        '🚀': '/images/emoji/GoogleBlob/emoji_u1f680.png',
        '🚁': '/images/emoji/GoogleBlob/emoji_u1f681.png',
        '🚂': '/images/emoji/GoogleBlob/emoji_u1f682.png',
        '🚃': '/images/emoji/GoogleBlob/emoji_u1f683.png',
        '🚄': '/images/emoji/GoogleBlob/emoji_u1f684.png',
        '🚅': '/images/emoji/GoogleBlob/emoji_u1f685.png',
        '🚆': '/images/emoji/GoogleBlob/emoji_u1f686.png',
        '🚇': '/images/emoji/GoogleBlob/emoji_u1f687.png',
        '🚈': '/images/emoji/GoogleBlob/emoji_u1f688.png',
        '🚉': '/images/emoji/GoogleBlob/emoji_u1f689.png',
        '🚐': '/images/emoji/GoogleBlob/emoji_u1f690.png',
        '🚑': '/images/emoji/GoogleBlob/emoji_u1f691.png',
        '🚒': '/images/emoji/GoogleBlob/emoji_u1f692.png',
        '🚓': '/images/emoji/GoogleBlob/emoji_u1f693.png',
        '🚔': '/images/emoji/GoogleBlob/emoji_u1f694.png',
        '🚕': '/images/emoji/GoogleBlob/emoji_u1f695.png',
        '🚖': '/images/emoji/GoogleBlob/emoji_u1f696.png',
        '🚗': '/images/emoji/GoogleBlob/emoji_u1f697.png',
        '🚘': '/images/emoji/GoogleBlob/emoji_u1f698.png',
        '🚙': '/images/emoji/GoogleBlob/emoji_u1f699.png'
      },
      "Objects": {
        '🔦': '/images/emoji/GoogleBlob/emoji_u1f526.png',
        '🔧': '/images/emoji/GoogleBlob/emoji_u1f527.png',
        '🔨': '/images/emoji/GoogleBlob/emoji_u1f528.png',
        '🔩': '/images/emoji/GoogleBlob/emoji_u1f529.png'

      },
      "Symbols": {
        '🔀': '/images/emoji/GoogleBlob/emoji_u1f500.png',
        '🔁': '/images/emoji/GoogleBlob/emoji_u1f501.png',
        '🔂': '/images/emoji/GoogleBlob/emoji_u1f502.png',
        '🔃': '/images/emoji/GoogleBlob/emoji_u1f503.png',
        '🔄': '/images/emoji/GoogleBlob/emoji_u1f504.png',
        '🔇': '/images/emoji/GoogleBlob/emoji_u1f507.png',
        '🔕': '/images/emoji/GoogleBlob/emoji_u1f515.png',
        '🔙': '/images/emoji/GoogleBlob/emoji_u1f519.png',
        '🔠': '/images/emoji/GoogleBlob/emoji_u1f520.png',
        '🔡': '/images/emoji/GoogleBlob/emoji_u1f521.png',
        '🔢': '/images/emoji/GoogleBlob/emoji_u1f522.png',
        '🔣': '/images/emoji/GoogleBlob/emoji_u1f523.png',
        '🔤': '/images/emoji/GoogleBlob/emoji_u1f524.png',
        '⛎': '/images/emoji/GoogleBlob/emoji_u26ce.png',
        '⛔': '/images/emoji/GoogleBlob/emoji_u26d4.png',
        '➡': '/images/emoji/GoogleBlob/emoji_u27a1.png',
        '➿': '/images/emoji/GoogleBlob/emoji_u27bf.png',
        '📛': '/images/emoji/GoogleBlob/emoji_u1f4db.png',
        '📵': '/images/emoji/GoogleBlob/emoji_u1f4f5.png',
        '🚫': '/images/emoji/GoogleBlob/emoji_u1f6ab.png',
        '🚭': '/images/emoji/GoogleBlob/emoji_u1f6ad.png',
        '🚮': '/images/emoji/GoogleBlob/emoji_u1f6ae.png',
        '🚯': '/images/emoji/GoogleBlob/emoji_u1f6af.png',
        '🚰': '/images/emoji/GoogleBlob/emoji_u1f6b0.png',
        '🚱': '/images/emoji/GoogleBlob/emoji_u1f6b1.png',
        '🚳': '/images/emoji/GoogleBlob/emoji_u1f6b3.png',
        '🚷': '/images/emoji/GoogleBlob/emoji_u1f6b7.png',
        '🚸': '/images/emoji/GoogleBlob/emoji_u1f6b8.png',
        '🚹': '/images/emoji/GoogleBlob/emoji_u1f6b9.png',
        '🚺': '/images/emoji/GoogleBlob/emoji_u1f6ba.png',
        '🚻': '/images/emoji/GoogleBlob/emoji_u1f6bb.png',
        '🚼': '/images/emoji/GoogleBlob/emoji_u1f6bc.png',
        '🚾': '/images/emoji/GoogleBlob/emoji_u1f6be.png',
        '🛂': '/images/emoji/GoogleBlob/emoji_u1f6c2.png',
        '🛃': '/images/emoji/GoogleBlob/emoji_u1f6c3.png',
        '🛄': '/images/emoji/GoogleBlob/emoji_u1f6c4.png',
        '🛅': '/images/emoji/GoogleBlob/emoji_u1f6c5.png',
        '🛑': '/images/emoji/GoogleBlob/emoji_u1f6d1.png',
        '🔚': '/images/emoji/GoogleBlob/emoji_u1f51a.png',
        '🔛': '/images/emoji/GoogleBlob/emoji_u1f51b.png',
        '🔜': '/images/emoji/GoogleBlob/emoji_u1f51c.png',
        '🔝': '/images/emoji/GoogleBlob/emoji_u1f51d.png',
        '🔞': '/images/emoji/GoogleBlob/emoji_u1f51e.png',
        '🔟': '/images/emoji/GoogleBlob/emoji_u1f51f.png',
        '🔯': '/images/emoji/GoogleBlob/emoji_u1f52f.png',
        '🔺': '/images/emoji/GoogleBlob/emoji_u1f53a.png',
        '🔻': '/images/emoji/GoogleBlob/emoji_u1f53b.png',
        '🔼': '/images/emoji/GoogleBlob/emoji_u1f53c.png',
        '🔽': '/images/emoji/GoogleBlob/emoji_u1f53d.png',
        '✅': '/images/emoji/GoogleBlob/emoji_u2705.png',
        '🦘': '/images/emoji/GoogleBlob/emoji_u1f998.png',
        '🦙': '/images/emoji/GoogleBlob/emoji_u1f999.png',
        '⬅': '/images/emoji/GoogleBlob/emoji_u2b05.png',
        '⬆': '/images/emoji/GoogleBlob/emoji_u2b06.png',
        '⬇': '/images/emoji/GoogleBlob/emoji_u2b07.png',
        '⬛': '/images/emoji/GoogleBlob/emoji_u2b1b.png',
        '⬜': '/images/emoji/GoogleBlob/emoji_u2b1c.png',
        '⭐': '/images/emoji/GoogleBlob/emoji_u2b50.png',
        '⭕': '/images/emoji/GoogleBlob/emoji_u2b55.png',
        '⃣': '/images/emoji/GoogleBlob/emoji_u20e3.png',
        '↩': '/images/emoji/GoogleBlob/emoji_u21a9.png',
        '↪': '/images/emoji/GoogleBlob/emoji_u21aa.png',
        '⏏': '/images/emoji/GoogleBlob/emoji_u23cf.png',
        '⏩': '/images/emoji/GoogleBlob/emoji_u23e9.png',
        '⏪': '/images/emoji/GoogleBlob/emoji_u23ea.png',
        '⏫': '/images/emoji/GoogleBlob/emoji_u23eb.png',
        '⏬': '/images/emoji/GoogleBlob/emoji_u23ec.png',
        '⏭': '/images/emoji/GoogleBlob/emoji_u23ed.png',
        '⏮': '/images/emoji/GoogleBlob/emoji_u23ee.png',
        '⏯': '/images/emoji/GoogleBlob/emoji_u23ef.png',
        '⏰': '/images/emoji/GoogleBlob/emoji_u23f0.png',
        '⏱': '/images/emoji/GoogleBlob/emoji_u23f1.png',
        '⏲': '/images/emoji/GoogleBlob/emoji_u23f2.png',
        '⏳': '/images/emoji/GoogleBlob/emoji_u23f3.png',
        '⏸': '/images/emoji/GoogleBlob/emoji_u23f8.png',
        '⏹': '/images/emoji/GoogleBlob/emoji_u23f9.png',
        '⏺': '/images/emoji/GoogleBlob/emoji_u23fa.png',
        'Ⓜ': '/images/emoji/GoogleBlob/emoji_u24c2.png',
        '▪': '/images/emoji/GoogleBlob/emoji_u25aa.png',
        '▫': '/images/emoji/GoogleBlob/emoji_u25ab.png',
        '▶': '/images/emoji/GoogleBlob/emoji_u25b6.png',
        '◀': '/images/emoji/GoogleBlob/emoji_u25c0.png',
        '◻': '/images/emoji/GoogleBlob/emoji_u25fb.png',
        '◼': '/images/emoji/GoogleBlob/emoji_u25fc.png',
        '◽': '/images/emoji/GoogleBlob/emoji_u25fd.png',
        '◾': '/images/emoji/GoogleBlob/emoji_u25fe.png',
        '⚠': '/images/emoji/GoogleBlob/emoji_u26a0.png',
        '⚡': '/images/emoji/GoogleBlob/emoji_u26a1.png',
        '⚪': '/images/emoji/GoogleBlob/emoji_u26aa.png',
        '⚫': '/images/emoji/GoogleBlob/emoji_u26ab.png',
        '☪': '/images/emoji/GoogleBlob/emoji_u262a.png',
        '☮': '/images/emoji/GoogleBlob/emoji_u262e.png',
        '☯': '/images/emoji/GoogleBlob/emoji_u262f.png',
        '☺': '/images/emoji/GoogleBlob/emoji_u263a.png',
        '♊': '/images/emoji/GoogleBlob/emoji_u264a.png',
        '♋': '/images/emoji/GoogleBlob/emoji_u264b.png',
        '♌': '/images/emoji/GoogleBlob/emoji_u264c.png',
        '♍': '/images/emoji/GoogleBlob/emoji_u264d.png',
        '♎': '/images/emoji/GoogleBlob/emoji_u264e.png',
        '♏': '/images/emoji/GoogleBlob/emoji_u264f.png',
        '♟️': '/images/emoji/GoogleBlob/emoji_u265f_fe0f.png',
        '♻': '/images/emoji/GoogleBlob/emoji_u267b.png',
        '♾️': '/images/emoji/GoogleBlob/emoji_u267e_fe0f.png',
        '♿': '/images/emoji/GoogleBlob/emoji_u267f.png',
        '⚛': '/images/emoji/GoogleBlob/emoji_u269b.png',
        '⚜': '/images/emoji/GoogleBlob/emoji_u269c.png',
        '❌': '/images/emoji/GoogleBlob/emoji_u274c.png',
        '❎': '/images/emoji/GoogleBlob/emoji_u274e.png',
        '〽': '/images/emoji/GoogleBlob/emoji_u303d.png',
        '⁉': '/images/emoji/GoogleBlob/emoji_u2049.png',
        '™': '/images/emoji/GoogleBlob/emoji_u2122.png',
        'ℹ': '/images/emoji/GoogleBlob/emoji_u2139.png',
        '↔': '/images/emoji/GoogleBlob/emoji_u2194.png',
        '↕': '/images/emoji/GoogleBlob/emoji_u2195.png',
        '↖': '/images/emoji/GoogleBlob/emoji_u2196.png',
        '↗': '/images/emoji/GoogleBlob/emoji_u2197.png',
        '↘': '/images/emoji/GoogleBlob/emoji_u2198.png',
        '↙': '/images/emoji/GoogleBlob/emoji_u2199.png',
        '☠': '/images/emoji/GoogleBlob/emoji_u2620.png',
        '☢': '/images/emoji/GoogleBlob/emoji_u2622.png',
        '☣': '/images/emoji/GoogleBlob/emoji_u2623.png',
        '☦': '/images/emoji/GoogleBlob/emoji_u2626.png',
        '☸': '/images/emoji/GoogleBlob/emoji_u2638.png',
        '☹': '/images/emoji/GoogleBlob/emoji_u2639.png',
        '♀': '/images/emoji/GoogleBlob/emoji_u2640.png',
        '♂': '/images/emoji/GoogleBlob/emoji_u2642.png',
        '♈': '/images/emoji/GoogleBlob/emoji_u2648.png',
        '♉': '/images/emoji/GoogleBlob/emoji_u2649.png',
        '♐': '/images/emoji/GoogleBlob/emoji_u2650.png',
        '♑': '/images/emoji/GoogleBlob/emoji_u2651.png',
        '♒': '/images/emoji/GoogleBlob/emoji_u2652.png',
        '♓': '/images/emoji/GoogleBlob/emoji_u2653.png',
        '♠': '/images/emoji/GoogleBlob/emoji_u2660.png',
        '♣': '/images/emoji/GoogleBlob/emoji_u2663.png',
        '♥': '/images/emoji/GoogleBlob/emoji_u2665.png',
        '♦': '/images/emoji/GoogleBlob/emoji_u2666.png',
        '❓': '/images/emoji/GoogleBlob/emoji_u2753.png',
        '❔': '/images/emoji/GoogleBlob/emoji_u2754.png',
        '❕': '/images/emoji/GoogleBlob/emoji_u2755.png',
        '❗': '/images/emoji/GoogleBlob/emoji_u2757.png',
        '❣': '/images/emoji/GoogleBlob/emoji_u2763.png',
        '❤': '/images/emoji/GoogleBlob/emoji_u2764.png',
        '➕': '/images/emoji/GoogleBlob/emoji_u2795.png',
        '➖': '/images/emoji/GoogleBlob/emoji_u2796.png',
        '➗': '/images/emoji/GoogleBlob/emoji_u2797.png',
        '⤴': '/images/emoji/GoogleBlob/emoji_u2934.png',
        '⤵': '/images/emoji/GoogleBlob/emoji_u2935.png',
        '〰': '/images/emoji/GoogleBlob/emoji_u3030.png',
        '㊗': '/images/emoji/GoogleBlob/emoji_u3297.png',
        '㊙': '/images/emoji/GoogleBlob/emoji_u3299.png',
        '󾠫': '/images/emoji/GoogleBlob/emoji_ufe82b.png',
        '🔲': '/images/emoji/GoogleBlob/emoji_u1f532.png',
        '🔳': '/images/emoji/GoogleBlob/emoji_u1f533.png',
        '🔴': '/images/emoji/GoogleBlob/emoji_u1f534.png',
        '🔵': '/images/emoji/GoogleBlob/emoji_u1f535.png',
        '🔶': '/images/emoji/GoogleBlob/emoji_u1f536.png',
        '🔷': '/images/emoji/GoogleBlob/emoji_u1f537.png',
        '🔸': '/images/emoji/GoogleBlob/emoji_u1f538.png',
        '🔹': '/images/emoji/GoogleBlob/emoji_u1f539.png',
        '🕉': '/images/emoji/GoogleBlob/emoji_u1f549.png',
        '🕐': '/images/emoji/GoogleBlob/emoji_u1f550.png',
        '🕑': '/images/emoji/GoogleBlob/emoji_u1f551.png',
        '🕒': '/images/emoji/GoogleBlob/emoji_u1f552.png',
        '🕓': '/images/emoji/GoogleBlob/emoji_u1f553.png',
        '🕔': '/images/emoji/GoogleBlob/emoji_u1f554.png',
        '🕕': '/images/emoji/GoogleBlob/emoji_u1f555.png',
        '🕖': '/images/emoji/GoogleBlob/emoji_u1f556.png',
        '🕗': '/images/emoji/GoogleBlob/emoji_u1f557.png',
        '🕘': '/images/emoji/GoogleBlob/emoji_u1f558.png',
        '🕙': '/images/emoji/GoogleBlob/emoji_u1f559.png',
        '🕠': '/images/emoji/GoogleBlob/emoji_u1f560.png',
        '🕡': '/images/emoji/GoogleBlob/emoji_u1f561.png',
        '🕢': '/images/emoji/GoogleBlob/emoji_u1f562.png',
        '🕣': '/images/emoji/GoogleBlob/emoji_u1f563.png',
        '🕤': '/images/emoji/GoogleBlob/emoji_u1f564.png',
        '🕥': '/images/emoji/GoogleBlob/emoji_u1f565.png',
        '🕦': '/images/emoji/GoogleBlob/emoji_u1f566.png',
        '🕧': '/images/emoji/GoogleBlob/emoji_u1f567.png',
        '🅰': '/images/emoji/GoogleBlob/emoji_u1f170.png',
        '🅱': '/images/emoji/GoogleBlob/emoji_u1f171.png',
        '🆑': '/images/emoji/GoogleBlob/emoji_u1f191.png',
        '🆒': '/images/emoji/GoogleBlob/emoji_u1f192.png',
        '🆓': '/images/emoji/GoogleBlob/emoji_u1f193.png',
        '🆔': '/images/emoji/GoogleBlob/emoji_u1f194.png',
        '🆕': '/images/emoji/GoogleBlob/emoji_u1f195.png',
        '🆖': '/images/emoji/GoogleBlob/emoji_u1f196.png',
        '🆗': '/images/emoji/GoogleBlob/emoji_u1f197.png',
        '🆘': '/images/emoji/GoogleBlob/emoji_u1f198.png',
        '🆙': '/images/emoji/GoogleBlob/emoji_u1f199.png',
        '🈁': '/images/emoji/GoogleBlob/emoji_u1f201.png',
        '🈂': '/images/emoji/GoogleBlob/emoji_u1f202.png',
        '🈲': '/images/emoji/GoogleBlob/emoji_u1f232.png',
        '🈳': '/images/emoji/GoogleBlob/emoji_u1f233.png',
        '🈴': '/images/emoji/GoogleBlob/emoji_u1f234.png',
        '🈵': '/images/emoji/GoogleBlob/emoji_u1f235.png',
        '🈶': '/images/emoji/GoogleBlob/emoji_u1f236.png',
        '🈷': '/images/emoji/GoogleBlob/emoji_u1f237.png',
        '🈸': '/images/emoji/GoogleBlob/emoji_u1f238.png',
        '🈹': '/images/emoji/GoogleBlob/emoji_u1f239.png',
        '🉐': '/images/emoji/GoogleBlob/emoji_u1f250.png',
        '🉑': '/images/emoji/GoogleBlob/emoji_u1f251.png'
      },
      "Flags": {
        '🇺🇸': '/images/emoji/GoogleBlob/emoji_u1f1fa_1f1f8.png',
        '🇨🇳': '/images/emoji/GoogleBlob/emoji_u1f1e8_1f1f3.png',
        '🇩🇪': '/images/emoji/GoogleBlob/emoji_u1f1e9_1f1ea.png',
        '🇪🇸': '/images/emoji/GoogleBlob/emoji_u1f1ea_1f1f8.png',
        '🇫🇷': '/images/emoji/GoogleBlob/emoji_u1f1eb_1f1f7.png',
        '🇬🇧': '/images/emoji/GoogleBlob/emoji_u1f1ec_1f1e7.png',
        '🇮🇹': '/images/emoji/GoogleBlob/emoji_u1f1ee_1f1f9.png',
        '🇯🇵': '/images/emoji/GoogleBlob/emoji_u1f1ef_1f1f5.png',
        '🇰🇷': '/images/emoji/GoogleBlob/emoji_u1f1f0_1f1f7.png',
        '🇷🇺': '/images/emoji/GoogleBlob/emoji_u1f1f7_1f1fa.png'
      }
    }
  }
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

//Execute things once page loaded...
document.addEventListener("DOMContentLoaded", function(e) {
  moveDivsAround();
  toggleContrast();
  parseEmojis(data["emojiMap"]["GoogleBlob"], lastScript);
  listenToRedirectClicks();
  topMenuFeedback();
	toggleSidebar();
	defaultGravatarInitialsSG();
	insertLabels();
	moreModules();
	//overflowingCallendar();
	//wrapSplitcontentBlocks();
});

//Move some containers out to achieve stickiness
function moveDivsAround() {
  if (document.getElementById('footer')) document.getElementById('wrapper').insertAdjacentElement('afterend', document.getElementById('footer'));
  if (document.getElementById('main-menu')) document.getElementById('main').insertAdjacentElement('beforebegin', document.getElementById('main-menu')); //Move main-menu outside parent container
	if (document.getElementsByClassName('breadcrumbs')[0]) document.getElementById('content').insertAdjacentElement('afterbegin', document.getElementsByClassName('breadcrumbs')[0]); //Move project/subproject breadcrumbs
  if (document.getElementById('top-menu')) document.getElementById('top-menu').insertAdjacentHTML('beforeend', '<div id="contrastswitch" onclick="toggleContrast(true)"></div>'); //Place the contrast switcher
	if (document.getElementById('quick-search')) document.getElementById('top-menu').insertAdjacentElement('beforeend', document.getElementById('quick-search')); //Move the quick search outside parent container
  if (document.getElementsByClassName('jstElements')[0]) document.getElementsByClassName('jstElements')[0].insertAdjacentHTML('beforeend', '<button type="button" tabindex="200" class="jstb_emoji" title="Emoji" onclick="showHideEmojiPicker()"><span>Emoji</span></button>'); //Place emoji selector button
	if (document.getElementById('sidebar')) document.getElementById('sidebar').insertAdjacentHTML('afterbegin', '<div id="sbartoggle" onclick="toggleSidebar(true)"><div>'); //Insert a toggle for sidebar
}

//A temporary fix for custom check/radio boxes
function insertLabels() {
	let checkboxes = document.querySelectorAll("#main input[type='checkbox'], #main input[type='radio']");
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].nextElementSibling == null || checkboxes[i].nextElementSibling.tagName.toLowerCase() === "a") {
			checkboxes[i].insertAdjacentHTML('afterend', '<label></label>');
		}
	}
}

//A temporary fix for inconsistent splitcontent blocks, which wrpas them into a flexbox
function wrapSplitcontentBlocks() {
	let contentleft = document.querySelectorAll('#content .splitcontentleft');
	let contentright = document.querySelectorAll('#content .splitcontentright');
	let wrapper = document.createElement('div');
	wrapper.style.display = "flex";
	for (let i = 0; i < contentleft.length; i++) {
		contentleft[i].insertAdjacentElement('beforebegin', wrapper);
		wrapper.appendChild(contentleft[i]);
		wrapper.appendChild(contentright[i]);
	}
}

//A temporary fix for main menu "more" submenu
function moreModules() {
	let menu = document.querySelector('#main-menu > ul').insertAdjacentHTML('beforeend', '<li><a style="font-family:Material Icons;font-size: 25px;top:-5px;position: absolute;">&#xe5d3</a><ul class="menu-children"><li><a>Item1</a></li><li><a>Item2</a></li></ul></li>');
}

//A temporary fix for callendar cells growing in height
function overflowingCallendar() {
	let callendarCells = document.querySelectorAll('.cal td');
	//let callendarIssues = document.querySelectorAll('.cal td > div');
	let wrapper = document.createElement('div');
	wrapper.style.overflow = "auto";
	for (let i = 0; i < callendarCells.length; i++) {
		callendarCells[i].insertAdjacentElement('beforeend', wrapper);
		for (let j = 0; j < document.querySelectorAll('.cal td > div').length; j++) {
			wrapper.appendChild(document.querySelectorAll('.cal td > div')[j]);
		}
	}
}

//Sidebar toggle
function toggleSidebar(set) {
	let sidebar = document.getElementById('sidebar');
	if (set && localStorage.getItem("isSidebar") === "false") localStorage.setItem("isSidebar", true);
	else if (set && localStorage.getItem("isSidebar") === "true") localStorage.setItem("isSidebar", false);

	if (localStorage.getItem("isSidebar") === null) localStorage.setItem("isSidebar", false);
	if (localStorage.getItem("isSidebar") === "false") document.getElementById('sidebar').classList.remove("shown");
	else if (localStorage.getItem("isSidebar") === "true") document.getElementById('sidebar').classList.add("shown");
}

//Inform users that they are about to go to Redmine.org from their Redmine page
function listenToRedirectClicks() {
  let currentHostname = window.location.hostname;
  let browserLanguage = (navigator.language && data["redmineOrgWarning"][navigator.language.split('-')[0]]) ? navigator.language.split('-')[0] : "generic";
  document.addEventListener('click', function (event) {
    	if (localStorage.getItem("isAwareAboutRedmineORG") == null && event.target.toString().match(/redmine\.org/g) && !event.target.toString().match(currentHostname)) {
        let usrChoice = confirm(data["redmineOrgWarning"][browserLanguage][0] + event.target + "!\n\n" + data["redmineOrgWarning"][browserLanguage][1]);
        if (usrChoice == false) event.preventDefault();
        else if (usrChoice == true) {event.preventDefault(); localStorage.setItem("isAwareAboutRedmineORG", true); window.open(event.target, '_blank');}
      }
    else if (localStorage.getItem("isAwareAboutRedmineORG") !== null && event.target.toString().match(/redmine\.org/g) && !event.target.toString().match(currentHostname)) {
      event.preventDefault(); window.open(event.target, '_blank');
    }

    if (event.target.href && !event.target.toString().match(currentHostname) && !event.target.toString().match(/redmine\.org/g)) {
      let usrChoice = confirm(data["externalLinkWarning"][browserLanguage][0] + event.target + "\n" + data["externalLinkWarning"][browserLanguage][1]);
      if (usrChoice == false) event.preventDefault();
    }
  }, false);
}

function parseEmojis(emojiPack, themeRoot) {
  let elements = document.querySelectorAll(".wiki"); //Target classes of containers where to replace
    for (let i = 0; i < elements.length; i++) { //for each found element of class "wiki", execute...
      for (let category in emojiPack) { //for each emoji category
        for (let emoji in emojiPack[category]) { //for each emoji in a category
         elements[i].innerHTML = elements[i].innerHTML.replaceAll(emoji, '<img style="filter: drop-shadow(0px 0px 5px #222);padding: 0px 3px 0px 3px;" src="' + themeRoot + emojiPack[category][emoji] + '"height="22px"/>');
        }
      }
    }
  }

//Dark light mode switcher
function toggleContrast(set) {
    let targetElements = document.querySelectorAll("body");
    if (set && localStorage.getItem("isNight") === "false") localStorage.setItem("isNight", true);
    else if (set && localStorage.getItem("isNight") === "true") localStorage.setItem("isNight", false);

    if (localStorage.getItem("isNight") === null) localStorage.setItem("isNight", false);
    if (localStorage.getItem("isNight") === "false") {
      for (let i = 0; i < targetElements.length; i++) {
        targetElements[i].className = "day-mode";
      }
    }
    else if (localStorage.getItem("isNight") === "true") {
      for (let i = 0; i < targetElements.length; i++) {
        targetElements[i].className = "night-mode";
      }
    }
}

//Adds emoji picker container above weiki-edit class container
function showHideEmojiPicker() {
let emojiChecks;
if (document.getElementById('emojiSelector') == null && document.getElementsByClassName('jstElements')[0] !== null) {
  let buildEmojicontent = '<div id="emojiSelector" style="position: absolute;height: 200px;width: 260px;top: 282px;background: white;right: 181px;border: 1px solid black;"><input id="emojiSearch" placeholder="Find emoji by tag..."><hr style=";margin:3px 0px 0px 0px;"><div id="allEmoji" style="height:154px;overflow-x:auto;padding:3px;width:99%;">';
      for (let category in data["emojiMap"]["GoogleBlob"]) { //for each emoji category
        buildEmojicontent += '<div id="' + category + '" class="emojiCat"><h4>' + category + '</h4>';
        for (let emoji in data["emojiMap"]["GoogleBlob"][category]) {
          buildEmojicontent += '<img style="cursor:pointer;" src="' + lastScript + data["emojiMap"]["GoogleBlob"][category][emoji] + '" title="' + emoji + '"height="20px"/>';
        }
        buildEmojicontent += '</div>';
      }
      buildEmojicontent += '</div></div>';

      document.getElementsByClassName('jstEditor')[0].insertAdjacentHTML('afterend', buildEmojicontent); //Place emoji selector
      document.getElementsByClassName('wiki-edit')[0].focus();

      document.getElementById('emojiSelector').addEventListener('click', emojiChecks = function (emojiClicks) {
        if (emojiClicks.target.tagName.toLowerCase() === "img") {
          document.getElementsByClassName('wiki-edit')[0].focus();
          insertInTextarea(document.activeElement, emojiClicks.target.title);
        }
      }, false);

      document.getElementById('emojiSearch').addEventListener('keypress', emojiSearch = function (searchBarTyping) {
        let rebuildEmojicontent = "";
        if (searchBarTyping.target.tagName.toLowerCase() === "input") {
          //alert(searchBarTyping.target.value);
          for (let category in data["emojiMap"]["GoogleBlob"]) { //for each emoji category
             rebuildEmojicontent += '<div id="' + category + '" class="emojiCat"><h4>' + category + '</h4>';
            for (let emoji in data["emojiMap"]["GoogleBlob"][category]) {
              if (searchBarTyping.target.value.match(emoji)) {
                rebuildEmojicontent += '<img style="cursor:pointer;" src="' + lastScript + data["emojiMap"]["GoogleBlob"][category][emoji] + '" title="' + emoji + '"height="20px"/>';
              }
              else if (searchBarTyping.target.value === "") {
                rebuildEmojicontent += '<img style="cursor:pointer;" src="' + lastScript + data["emojiMap"]["GoogleBlob"][category][emoji] + '" title="' + emoji + '"height="20px"/>';
              }
            }
            rebuildEmojicontent += '</div></div>';
          }
          document.getElementById('allEmoji').innerHTML = rebuildEmojicontent;
        }
      }, false);

}
  else if (document.getElementById('emojiSelector') !== null && document.getElementsByClassName('jstElements')[0] !== null) {
    document.getElementById('emojiSelector').removeEventListener('click', emojiChecks, false);
    document.getElementById('emojiSelector').removeEventListener('click', emojiSearch, false);
    document.getElementById('emojiSelector').remove(1);
  }
}

//Function to insert text in the focused area
function insertInTextarea(targetElement, textToInsert) {
  let start = targetElement.selectionStart;
  let end = targetElement.selectionEnd;
  let text = targetElement.value;
  let before = text.substring(0, start);
  let after  = text.substring(end, text.length);
  targetElement.value = (before + textToInsert + after);
  targetElement.selectionStart = targetElement.selectionEnd = start + textToInsert.length;
  targetElement.focus();
}

//Adds a bar to active buttons in the top menu, note that it's designed to match contents of buttons. For plugins, consider having button names to be identical to their location URL.
function topMenuFeedback() {
    if (window.location.href.match("(\/admin)|(\/admin\/projects)|(\/users)|(\/groups)|(\/roles)|(\/trackers)|(\/admin\/plugins)|(\/admin\/info)|(\/issue_statuses)|(\/workflows)|(\/custom_fields)|(\/enumerations)|(\/auth_sources)|(\/admin\/plugins)|(\/admin\/info)")) {
      document.getElementsByClassName("administration")[0].classList.add('tmbActive');
    }
    if (window.location.href.match("(\/projects)|(\/activity)|(\/issues)|(\/time_entries)|(\/gantt)|(\/calendar)|(\/news)|(\/documents)|(\/wiki)|(\/boards)|(\/files)|(\/settings)")) {
      document.getElementsByClassName("projects")[0].classList.add('tmbActive');
    }
    if (window.location.href.match("(\/my\/page)")) {
      document.getElementsByClassName("my-page")[0].classList.add('tmbActive');
    }
    if (window.location.href.match("(\/my\/account)")) {
      document.getElementsByClassName("my-account")[0].classList.add('tmbActive');
    }
    if (window.location.href.match("(\/account\/register)")) {
      document.getElementsByClassName("register")[0].classList.add('tmbActive');
    }
    if (window.location.href.match("(\/login)")) {
      document.getElementsByClassName("login")[0].classList.add('tmbActive');
    }
    if (!window.location.href.match("[\.\:]+[a-z0-9]+\/+[a-z0-9]")) {
      document.getElementsByClassName("home")[0].classList.add('tmbActive');
    }
  }

//Self generate avatar initials if user's Gravatar is unset
function defaultGravatarInitialsSG() {
	let objects = document.querySelectorAll("#content .gravatar, #content .user.active");
	let buffer = {}; //Create a sorted JSON array
	for (let i = 0; i < objects.length; i++) {
		if (objects[i].tagName.toLowerCase() === "img") {
			if (buffer[objects[i+1].innerText] == null) buffer[objects[i+1].innerText] = [objects[i]]; //Declare the index type array inside JSON if one is null
			else buffer[objects[i+1].innerText].push(objects[i]); //Else append objects if already declared
		}
	}

	for (let i = 0; i < Object.keys(buffer).length; i++) { //Get the avatar URL from the first stored block and append it to sorted JSON array
		buffer[Object.keys(buffer)[i]].avatarURL = buffer[Object.keys(buffer)[i]][0].src;
		if (!buffer[Object.keys(buffer)[i]].avatarURL.match("(identicon)|(wavatar)|(monsterid)|(retro)|(mm)")) { //Only check if not identicon, wavatar, monsterid, retro or mystery man
			checkFile(buffer[Object.keys(buffer)[i]][0].src, function(error, response) {
				if (error) swapBlocks(Object.keys(buffer)[i], buffer[Object.keys(buffer)[i]], colorManager(buffer[Object.keys(buffer)[i]].avatarURL));
			});
		}
	}

	function checkFile(url, callback) { //HTTP request to check if Gravatar is at home :)
		let request = new XMLHttpRequest();
		request.open('GET', url + "404");
		request.onload = function () {
			if (request.status < 200 || request.status > 299) callback("Error: Status " + request.status + " on resource " + url);
			else callback(null, request);
		}
		request.send();
	}

	function swapBlocks(username, targets, inputHex) {
		let initials = (username.match(" ")) ? username.split(" ")[0].charAt(0) + username.split(" ")[1].charAt(0) : username.charAt(0).toUpperCase(); //Maintain initials in case of "username" mode
		for (let i = 0; i < targets.length; i++) {
			let size = targets[i].src.match("(?!\&size=)[0-9]*(?=\&)")[0]; //Capture size number from the gravatar link
			targets[i].outerHTML = "<div class='gravatar' style='margin-right:10px;background-color:#" + inputHex.bg + ";height:" + size + "px;width:" +  size + "px'><a class='initials' style='color:" + inputHex.text + "'>" + initials + "</a>";
		}
	}

	function colorManager(inputLink, outputHex) {
		let extractedMD5 = inputLink.substring(inputLink.lastIndexOf("/") + 1, inputLink.lastIndexOf("?"));
		let bgColor = (parseInt(parseInt(extractedMD5, 36).toExponential().slice(2,-5), 10) & 0xFFFFFF).toString(16);
		let textColor = ((((parseInt(bgColor.substr(0,2), 16) * 299) + (parseInt(bgColor.substr(2,2), 16) * 587) + (parseInt(bgColor.substr(4,2), 16) * 114)) / 1000) >= 128) ? 'black' : 'white'; //This is YIQ \m/
		return outputHex = {bg: bgColor, text: textColor};
	}
}

//WORK IN PROGRESS SECTION
