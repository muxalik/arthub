'use server'

import { revalidatePath } from 'next/cache'
import User from '../database/models/user.model'
import { connectToDatabase } from '../database/mongoose'
import { handleError } from '../utils'

export async function createUser(params: CreateUserParams) {
  try {
    await connectToDatabase()

    const user = await User.create(params)

    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error)
  }
}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase()

    const user = await User.findOne({ clerkId: userId })

    if (!user) {
      throw new Error('User not found')
    }

    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error)
  }
}

export async function updateUser(clerkId: string, params: UpdateUserParams) {
  try {
    await connectToDatabase()

    const updatedUser = await User.findOneAndUpdate({ clerkId }, params, {
      new: true,
    })

    if (!updateUser) {
      throw new Error('User not found')
    }

    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    handleError(error)
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase()

    const user = await User.findOne({ clerkId })

    if (!user) {
      throw new Error('User not found')
    }

    const deletedUser = await User.findByIdAndDelete(user._id)

    revalidatePath('/')

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
  } catch (error) {
    handleError(error)
  }
}

export async function updateCredits(userId: string, creditFee: number) {
  try {
    await connectToDatabase()

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { credits: creditFee } },
      { new: true }
    )

    if (!updatedUserCredits) {
      throw new Error('User credits update failed')
    }

    return JSON.parse(JSON.stringify(updatedUserCredits))
  } catch (error) {
    handleError(error)
  }
}
