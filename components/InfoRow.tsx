import { StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  value: string | number | boolean | null | undefined;
};

export function InfoRow({ label, value }: Props) {
  const display =
    value === null || value === undefined
      ? '—'
      : typeof value === 'boolean'
      ? value ? 'true' : 'false'
      : String(value);

  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value} numberOfLines={1}>{display}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#3a3a3c',
  },
  label: {
    color: '#8e8e93',
    fontSize: 15,
  },
  value: {
    color: '#fff',
    fontSize: 15,
    fontVariant: ['tabular-nums'],
    maxWidth: '60%',
  },
});
