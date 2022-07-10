import ImageColors from 'react-native-image-colors';

export const getColor = async (uri: string, key: string) => {
  const result = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: true,
    key,
  });

  if (result.platform === 'android') {
    return result.dominant;
  } else if (result.platform === 'ios') {
    return result.primary;
  }
};

export const imageUri = 'https://image.tmdb.org/t/p/w500';
