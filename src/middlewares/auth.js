export default function auth({ next, router }) {
  if (!localStorage.getItem("data"))
    return router.push({
      name: "Login",
    });

  return next();
}
