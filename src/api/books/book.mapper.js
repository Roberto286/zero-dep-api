export const bookMapper = (bookDto) => {
  const { name, description, author } = bookDto;

  return {
    name,
    description,
    author,
  };
};
