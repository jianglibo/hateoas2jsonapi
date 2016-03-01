export function opts() {
  return {
    modelName: "person",
    typePathMap: {
      person: {
        role: "roles|_embedded/roles",
        person: "_embedded/creator",
        task: "_embedded/tasks"
      }
    }
  };
}
