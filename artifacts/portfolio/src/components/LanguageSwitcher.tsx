import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/i18n/translations";

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-5 right-6 z-50 flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
      {LANGUAGES.map((lang, i) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={[
            "flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200",
            language === lang.code
              ? "bg-white text-black"
              : "text-muted-foreground hover:text-foreground",
            i < LANGUAGES.length - 1 ? "mr-0.5" : "",
          ].join(" ")}
          aria-label={`Switch to ${lang.label}`}
        >
          <span>{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
