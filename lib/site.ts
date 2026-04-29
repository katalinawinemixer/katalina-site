export const siteConfig = {
  name: "Katalina Londoño",
  url: "https://www.katalinalondono.com",
  description:
    "Notes on clinical-trial operations, Latin American biotech, and the regulatory edges where early-phase therapies actually fail.",
  author: "Katalina Londoño",
  email: "Katalina@katalinalondono.com",
  locale: "en_US",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
