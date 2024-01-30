export const proseRemarkPlugin = () => {
    return ((tree, file) => {
        file.data.astro.frontmatter.customProperty = 'Generated property';
    })
}