import { html } from 'lit';
import {
    PieSpinner, SpinnerProps, sizes, variants,
} from '@justeattakeaway/pie-spinner';
import { type StoryMeta } from '../types';
import { TemplateFunction, createStory } from '../utilities';

// This prevents storybook from tree shaking the components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keptReferences = [PieSpinner];

type SpinnerStoryMeta = StoryMeta<SpinnerProps>;

const defaultArgs: SpinnerProps = {
    variant: 'brand',
    size: 'm',
    aria: {
        label: 'Loading',
    },
};

const spinnerStoryMeta: SpinnerStoryMeta = {
    title: 'Spinner',
    component: 'pie-spinner',
    argTypes: {
        size: {
            description: 'Set the size of the spinner.',
            control: 'select',
            options: sizes,
            defaultValue: {
                summary: 'm',
            },
        },
        variant: {
            description: 'Set the variant of the spinner.',
            control: 'select',
            options: variants,
            defaultValue: {
                summary: 'brand',
            },
        },
        aria: {
            description: 'The ARIA labels used for the spinner.',
            control: 'object',
        },
    },
    args: defaultArgs,
    parameters: {
        design: {
            type: 'figma',
            url: '',
        },
    },
};

export default spinnerStoryMeta;

const Template: TemplateFunction<SpinnerProps> = ({
    size,
    variant,
    aria,
}) => html`
        <pie-spinner
            size="${size}"
            variant="${variant}"
            .aria="${aria}">
        </pie-spinner>`;

const createSpinnerStory = createStory<SpinnerProps>(Template, defaultArgs);

export const Brand = createSpinnerStory();
export const Secondary = createSpinnerStory({ variant: 'secondary' });
export const Inverse = createSpinnerStory({ variant: 'inverse' }, { bgColor: 'dark (container-dark)' });
