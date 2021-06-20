export interface Task {
  id: number,
  text: string,
  day: string,
  reminder: boolean
}

export interface CreateTaskPayLoad {
  text: string,
  day: string,
  reminder: boolean
}
