
import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// --- Guideline for responsive design ---
// We'll use a standard iPhone 6/7/8 width as our base (375dp).
// You can adjust this base width based on your primary design mockups.
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667; // Optional: if you also want to scale vertically

// Function to scale a given size based on screen width
export const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;

// Function to scale a given size based on screen height (less common for fonts, but useful for components)
export const verticalScale = (size: number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;

// Function for moderate scaling, often used for paddings/margins/some font sizes
// factor - controls the moderation (0 to 1, 0.5 is common)
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

// Specifically for font sizes, it's good practice to also consider PixelRatio
// This ensures that fonts don't become blurry on higher density screens and accounts for user font scaling preferences.
export const responsiveFontSize = (size: number) => {
  const newSize = moderateScale(size); // You can use scale or moderateScale here
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    // Android can be a bit trickier with font scaling vs pixel ratio.
    // PixelRatio.getFontScale() accounts for user's system font size preference.
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) / PixelRatio.getFontScale();
  }
};