import { View } from 'react-native'

const Margin: React.FC<{ margin: number }> = ({ margin }) => {
  return <View style={{ margin: margin / 2 }} />
}

export {
  Margin
}