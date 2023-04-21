import React, { useEffect, useState } from "react";
import axios from "axios";

function useAxios(url, method = "GET", data = {}) {
	const [loading, setLoading] = useState(true);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios({
			url,
			method,
			data,
			onRequest: () => setLoading(true),
			onSuccess: (response) => {
				setLoading(false);
				setResponse(response);
			},
			onError: (error) => {
				setLoading(false);
				setError(error);
			},
		});
	}, [url, method, data]);

	return { loading, response, error };
}

export default useAxios;
