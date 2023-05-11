import { useRequest } from 'ahooks'
export const fetcher = async (page = 0, limit = 60) => 
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`).then((res) => res.json())


export const useTexts =  (page = 0, limit = 60) => {
    const { data, error, run, loading } = useRequest<Array<{title: string, id: string}>, [number, number]>(fetcher, { defaultParams: [page, limit] })
    return {
        data,
        error,
        run,
        loading
    }
}


export const log = (componentName: string)=>{
    console.log(`%c[${componentName}]`, `color: ${'#' + Math.floor(componentName.length * 1677721).toString(16)}`, 'render',)
}