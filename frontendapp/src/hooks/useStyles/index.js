import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = (styles, depth) => useMemo(() => StyleSheet.create(styles), depth);

export default useStyles;
