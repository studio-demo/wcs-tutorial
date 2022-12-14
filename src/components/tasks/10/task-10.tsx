import React from 'react';
import styles from './task-10.module.scss';
import { TaskSymbol } from '../../common/task-symbol/task-symbol';

export interface Task10Props {
    className?: string;
}

export const Task10: React.FC<Task10Props> = (className) => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>10</b> / 10
            </div>
            <div className={styles.title}>Work with Git</div>
            <ol start={0} className={styles.desc}>
                <li>
                    {' '}
                    WCS is using <b>Git</b> for version control. This means you
                    can manage different versions of your projects through{' '}
                    <b>branches</b>. Let’s switch to one with the lessons
                    solved.{' '}
                </li>
                <li>
                    {' '}
                    Before switching branches, you have to <b>commit</b> or{' '}
                    <b>revert</b> your changes (if you have any). Commit them to
                    your current branch with <TaskSymbol name="commit" />.
                    Alternatively, revert them in the <TaskSymbol name="more" />{' '}
                    menu at the top right.{' '}
                </li>
                <li>
                    {' '}
                    When the time comes, you'll need a <b>GitHub</b> account to
                    publish or <b>sync</b> your project. Just click{' '}
                    <TaskSymbol name="sync" />{' '}
                </li>
                <li>
                    {' '}
                    Time to switch. Use <TaskSymbol name="branch" /> and switch
                    to the <b>solved-lessons</b> branch. Enjoy!
                </li>
            </ol>
        </div>
    );
};
