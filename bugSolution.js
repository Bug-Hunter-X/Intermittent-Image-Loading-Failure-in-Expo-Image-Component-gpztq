import FastImage from 'react-native-fast-image';

const MyComponent = () => {
  const [imageUrl, setImageUrl] = useState('https://example.com/image.jpg');
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <View>
      {error ? (
        <Text>Failed to load image. Please try again.</Text>
      ) : (
        <FastImage
          source={{ uri: imageUrl }}
          style={{ width: 200, height: 200 }}
          resizeMode={'contain'}
          onError={handleError}
        />
      )}
    </View>
  );
};