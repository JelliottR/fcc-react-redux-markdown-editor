import { StyleSheet } from 'aphrodite';

export const editorWindow = StyleSheet.create({
	grid: { gridColumn: '1/2', gridRow: '2/3', height: '100%' },
	textArea: { height: '100%', width: ' 100%' }
});

export const previewWindow = StyleSheet.create({
	grid: { gridColumn: '2/3', gridRow: '2/3' }
});

export const heading = StyleSheet.create({
	text: {
		gridColumn: '1/3',
		gridRow: '1/2',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#444',
		color: 'white'
	}
});

export const s_App = StyleSheet.create({
	grid: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: '5% 95%',
		height: '100%',
		columnGap: '20px'
	}
});
