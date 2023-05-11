import useSWR from 'swr'
export const fetcher = (...args: Parameters<typeof fetch> ) => fetch(...args).then((res) => res.json())


export const useTexts =  (page = 0, limit = 20) => {
    const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`, fetcher)
    return {
        data,
        error,
        isLoading
    }
}


export const log = (componentName: string)=>{
    console.log(`%c[${componentName}]`, `color: ${'#'+Math.floor(Math.random()*16777215).toString(16)}`, 'render',)
}