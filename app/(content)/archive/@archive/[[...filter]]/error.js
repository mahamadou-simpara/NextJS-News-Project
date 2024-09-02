'use client';

export default function ErrorPage ({error}) {
    return <div>
        <h1>An error has occurred</h1>
        <p>{error.message || 'Invalid path.'}</p>
    </div>
}