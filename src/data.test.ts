/**
 * Nashiuso Portfolio
 * Author: Nashiuso
 * GitHub: https://github.com/nashiuso
 * License: MIT
 */

import { describe, expect, it } from 'vitest';
import { skills, topics } from './data';

describe('Data Integrity Checks', () => {
  it('should have exactly 12 topics', () => {
    expect(topics).toHaveLength(12);
  });

  it('should have exactly 14 skills', () => {
    expect(skills).toHaveLength(14);
  });

  it('should have valid properties for every topic', () => {
    topics.forEach((topic) => {
      expect(topic.id).toBeDefined();
      expect(topic.name).toBeDefined();
      expect(topic.url).toMatch(/^https?:\/\
      expect(topic.page).toMatch(/^P\.\d+$/);
    });
  });

  it('should have valid properties for every skill', () => {
    skills.forEach((skill) => {
      expect(skill.id).toBeDefined();
      expect(skill.name).toBeDefined();
      expect(skill.url).toMatch(/^https?:\/\
    });
  });
});
