import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {User, UsersQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`

const getUserSearch = (q:string) => {
  const clause = q.split('=')[3];
  if('alireza rahimi'.includes(clause))
    return {
      data: [{
        avatar: "avatars/300-1.jpg",
        email: "Ar.dvlpr@gmail.com",
        id: 3,
        joined_day: "22 Sep 2022, 8:43 pm",
        last_login: "3 days ago",
        name: "Alireza Rahimi",
        online: false,
        position: "Software Enginer",
        role: "Developer",
        two_steps: false,
      }],
      payload: {}
    }
  else return getUsers(q)
}

const getUsers = (query: string): Promise<UsersQueryResponse> => {
  console.log(query);
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<User | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const createUser = (user: User): Promise<User | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateUser = (user: User): Promise<User | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, getUserSearch, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser}
