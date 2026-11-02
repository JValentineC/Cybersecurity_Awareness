export type Threat = {
  id: string
  icon: string
  name: string
  category: string
  what: string
  tip: string
}

export const threats: Threat[] = [
  {
    id: "phishing",
    icon: "🎣",
    name: "Phishing",
    category: "Social",
    what: "Fake emails and websites that impersonate people or brands you trust to trick you into handing over passwords, codes, or payment details.",
    tip: "Slow down on anything urgent. Check the real sender address, and type important URLs yourself instead of clicking.",
  },
  {
    id: "quishing",
    icon: "🔳",
    name: "Quishing (QR Phishing)",
    category: "Social",
    what: "A QR code on a flyer, a parking meter, an email, or a sticker slapped over a real one that sends your phone to a malicious site or payment page.",
    tip: "Preview the link your camera shows before you open it, and never scan a code to 'verify' an account or pay a stranger.",
  },
  {
    id: "smishing-vishing",
    icon: "📱",
    name: "Smishing & Vishing",
    category: "Social",
    what: "Scam text messages (smishing) and phone calls (vishing) that pressure you into clicking a link, reading back a code, or confirming account info.",
    tip: "Hang up and call the company back on a number you look up yourself. Real support never needs your one-time code.",
  },
  {
    id: "badusb",
    icon: "🔌",
    name: "BadUSB",
    category: "Hardware",
    what: "A device that looks like a flash drive or charging cable but acts as a keyboard, typing commands into your computer the instant it is plugged in.",
    tip: "Only plug in cables and drives you bought yourself, and lock your screen whenever you walk away.",
  },
  {
    id: "subghz",
    icon: "📡",
    name: "Sub-GHz Attacks",
    category: "Radio",
    what: "Inexpensive radios can record and replay the signals from key fobs, garage remotes, and some gates or alarms on the 300-900 MHz bands.",
    tip: "Favor rolling-code remotes, and assume any device that opens with a fixed signal can be opened by someone nearby.",
  },
  {
    id: "wifi-cracking",
    icon: "📶",
    name: "Wi-Fi Cracking",
    category: "Network",
    what: "Weak or reused Wi-Fi passwords can be captured and cracked offline, putting an attacker on the same network as your devices.",
    tip: "Use a long WPA2/WPA3 passphrase, change the router's default login, and keep guests and smart devices on a separate network.",
  },
  {
    id: "evil-twin",
    icon: "🛰️",
    name: "Evil Twin Networks",
    category: "Network",
    what: "A rogue Wi-Fi hotspot named like one you trust ('Airport_Free_WiFi') so your device connects and the attacker can watch your traffic.",
    tip: "Avoid sensitive logins on open Wi-Fi, confirm the real network name with staff, and use a VPN when you must connect.",
  },
  {
    id: "rfid-nfc",
    icon: "💳",
    name: "RFID / NFC Cloning",
    category: "Hardware",
    what: "Badges and contactless cards can be read from a short distance and copied, letting someone duplicate your building access or payment card.",
    tip: "Keep badges and cards in a shielded sleeve, and report a lost badge right away so it can be deactivated.",
  },
  {
    id: "social-engineering",
    icon: "🧠",
    name: "Social Engineering",
    category: "Human",
    what: "The thread behind most attacks: manipulating people with urgency, authority, or a favor into bypassing the security that technology put in place.",
    tip: "When something feels rushed or too good to be true, verify through a second channel before you act.",
  },
]
