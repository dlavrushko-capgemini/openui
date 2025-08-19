export const EXAMPLES = [
	'Send email to john.doe@example when new row is added to Google Spreadsheet. Take email title and body from new row in spreadsheet.',
	'Daily at 8 AM UA time, fetch weather data from API and send to Microsoft Teams chat.',
	'Send a Slack notification to a team chat when new Github issue is created.',
	'On new submission of a web form, via webhook trigger a workflow to send an email.',
	'Create a n8n workflow to read emails from excel file and send emails to each person in the file.',
] satisfies string[]

export const adjectives = [
	'creative',
	'colorful',
	'enterprise',
	'modern',
	'minimal',
	'weirder'
] satisfies string[]

export const knownImageModels = [
	/^gpt-/,
	/^llava/,
	/^moondream/,
	/^gemini-1\.5/,
	/^claude/,
	/^phi-3-vision/
] satisfies RegExp[]
