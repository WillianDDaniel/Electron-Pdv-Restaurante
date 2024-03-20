export const truncateDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    // Trunca a string e adiciona "..." no final
    return text.slice(0, limit) + '...';
  };