import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="correct"
        />
        <Cell value="C" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell value="P" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter S is in the word and in the correct spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="M" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="present"
        />
        <Cell value="G" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is in the word but in the wrong spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="Q" isCompleted={true} />
        <Cell value="U" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="T" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is not in the word in any spot.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
