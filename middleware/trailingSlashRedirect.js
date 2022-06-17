export default function ({ route, redirect }) {
	if (route.path !== '/' && route.path.endsWith('/')) {
		const { path, query, hash } = route;
		const nextPath = path.replace(/\/+$/, '') || '/';
		console.log(nextPath)
		const nextRoute = { path: nextPath, query, hash };

		redirect(nextRoute);
	}
}