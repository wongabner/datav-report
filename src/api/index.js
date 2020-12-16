import request from '@/utils/request'

const icode = '13926EAFCAA16CC3'

export const wordcloud = () => {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode }
  })
}

export const mapScatter = () => {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: { icode }
  })
}

export const screenData = () => {
  return request({
    url: '/screen/data',
    method: 'get',
    params: { icode }
  })
}
