export function opts() {
  return {
    typePathMap: {
      person: {
        role: "roles|_embedded/roles",
        person: "_embedded/creator",
        task: "_embedded/tasks"
      }
    }
  };
}
